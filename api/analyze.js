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

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API Key não configurada no servidor' });
    }

    const prompt = `Você é um dermatologista experiente analisando uma foto de pele.

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
  "produtos_recomendados": [
    "Produto 1 (categoria) - R$ XX-XX",
    "Produto 2 (categoria) - R$ XX-XX",
    "Produto 3 (categoria) - R$ XX-XX",
    "Produto 4 (categoria) - R$ XX-XX",
    "Produto 5 (categoria) - R$ XX-XX",
    "Produto 6 (categoria) - R$ XX-XX"
  ],
  "tempo_resultado": "string ex: 8-12 semanas",
  "confianca": 0.85
}

IMPORTANTE: Se a imagem não mostrar pele claramente, responda:
{"erro": "Imagem não permite análise. Por favor, envie uma foto bem iluminada do rosto."}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5-20250929',
        max_tokens: 1500,
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
              },
              {
                type: 'text',
                text: prompt
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ 
        error: errorData.error?.message || 'Erro ao chamar Claude API' 
      });
    }

    const data = await response.json();
    const responseText = data.content[0].text;

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ error: 'Resposta inválida da IA' });
    }

    const diagnosis = JSON.parse(jsonMatch[0]);

    if (diagnosis.erro) {
      return res.status(400).json({ error: diagnosis.erro });
    }

    return res.status(200).json(diagnosis);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
