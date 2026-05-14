import Anthropic from '@anthropic-ai/sdk';
import { getProductsForDiagnosis } from './products.js';

const anthropic = new Anthropic();

const SYSTEM_PROMPT = `Você é um dermatologista experiente analisando uma foto de pele.

Analise a imagem e forneça um diagnóstico focado em MANCHAS na pele.

Responda APENAS com um JSON válido neste formato exato (sem texto adicional, sem markdown):

{
  "tipo_pele": "Oleosa | Seca | Mista | Normal | Sensível",
  "problema_principal": "string descrevendo o problema principal",
  "tipos_manchas": ["mancha tipo 1", "mancha tipo 2"],
  "descricao": "descrição detalhada de 2-3 frases sobre o que foi observado",
  "rotina_tratamento": [
    "Manhã: passo 1",
    "Manhã: passo 2",
    "Noite: passo 1",
    "Noite: passo 2",
    "Semanal: passo 1"
  ],
  "categorias_produtos": ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"],
  "tempo_resultado": "string ex: 8-12 semanas",
  "confianca": 0.85
}

Categorias disponíveis para "categorias_produtos" (escolha 4 a 6 que mais se encaixam no diagnóstico):
limpeza_gel, limpeza_espuma, limpeza_leite, agua_micelar,
hidratante_leve, hidratante_rico,
protetor_solar_leve, protetor_solar_hidratante,
serum_vitamina_c, serum_niacinamida, serum_retinol,
esfoliante_quimico, tratamento_manchas, tratamento_acne, tonico_facial

IMPORTANTE: Se a imagem não mostrar pele claramente, responda:
{"erro": "Imagem não permite análise. Por favor, envie uma foto bem iluminada do rosto."}`;

const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB decoded

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Apenas POST permitido' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Imagem não fornecida' });
    }

    const decodedLength = Buffer.byteLength(image, 'base64');
    if (decodedLength > MAX_IMAGE_BYTES) {
      return res.status(400).json({ error: 'Imagem muito grande. Máximo permitido: 5 MB.' });
    }

    const message = await anthropic.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 1500,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' }
        }
      ],
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: image
              }
            }
          ]
        }
      ]
    });

    const responseText = message.content?.[0]?.text;
    if (!responseText) {
      return res.status(500).json({ error: 'Resposta vazia da IA' });
    }

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ error: 'Resposta inválida da IA' });
    }

    let diagnosis;
    try {
      diagnosis = JSON.parse(jsonMatch[0]);
    } catch {
      return res.status(500).json({ error: 'Erro ao processar resposta da IA' });
    }

    if (diagnosis.erro) {
      return res.status(400).json({ error: diagnosis.erro });
    }

    const categorias = Array.isArray(diagnosis.categorias_produtos)
      ? diagnosis.categorias_produtos : [];
    diagnosis.produtos_catalogo = getProductsForDiagnosis(diagnosis.tipo_pele, categorias);
    delete diagnosis.categorias_produtos;

    const phone = process.env.WHATSAPP_PHONE;
    if (phone) {
      const msg = `Olá! Fiz uma análise no Visage Sain.\n\n📋 Diagnóstico: Pele ${diagnosis.tipo_pele}\n🎯 Problema: ${diagnosis.problema_principal}\n\nGostaria de receber o prontuário completo com links dos produtos recomendados.`;
      diagnosis.whatsapp_link = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }

    return res.status(200).json(diagnosis);

  } catch (error) {
    console.error('Erro na análise:', error.message);
    return res.status(500).json({ error: 'Erro interno ao processar a análise.' });
  }
}
