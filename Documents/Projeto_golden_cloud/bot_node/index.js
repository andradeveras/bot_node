const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Mapeamento de intenções com palavras-chave e respostas
const intents = {
  cumprimentos: {
    keywords: ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'e aí', 'fala', 'salve'],
    reply: "Olá! Como posso te ajudar hoje?"
  },
  adrenalina: {
    keywords: ['adrenalina', 'radical', 'emocionante', 'aventura', 'top', 'show', 'demais'],
    reply: "bom demais, né!? Que bom que gostou!"
  },
  passeio: {
    keywords: ['fui', 'visitei', 'estive', 'conheci', 'passei', 'experiência'],
    reply: "Que legal! Esperamos te ver de novo em breve!"
  },
  elogio: {
    keywords: ['lindo', 'maravilhoso', 'incrível', 'ótimo', 'legal', 'sensacional', 'top'],
    reply: "Obrigado pelo carinho! Você é demais!"
  },
  dúvida: {
    keywords: ['quanto custa', 'preço', 'valor', 'horário', 'funciona', 'aberto', 'fechado', 'quando'],
    reply: "Para mais informações acesse nosso site ou fale com nosso atendimento!"
  },
  reclamação: {
    keywords: ['demora', 'problema', 'ruim', 'chateado', 'reclamação', 'erro', 'atraso'],
    reply: "Sentimos muito pelo transtorno, vamos melhorar!"
  },
  promoção: {
    keywords: ['promoção', 'desconto', 'oferta', 'promo', 'barato', 'melhor preço'],
    reply: "Confira nossas promoções no site e aproveite!"
  },
  agradecimento: {
    keywords: ['obrigado', 'valeu', 'thanks', 'agradecido', 'grato'],
    reply: "De nada! Sempre que precisar, estamos aqui!"
  },
  reserva: {
    keywords: ['reservar', 'reserva', 'marcar', 'agendar', 'agenda', 'booking'],
    reply: "Você pode fazer sua reserva diretamente pelo nosso site!"
  },
  dúvida_técnica: {
    keywords: ['funciona', 'como usar', 'manual', 'tutorial', 'passo a passo'],
    reply: "Temos um guia completo no nosso site, dá uma olhada lá!"
  },
  localizacao: {
    keywords: ['onde fica', 'localização', 'endereço', 'local', 'mapa'],
    reply: "Estamos localizados na Avenida Principal, 1234. Venha nos visitar!"
  },
  horário_funcionamento: {
    keywords: ['horário', 'aberto', 'fecha', 'funciona', 'horas'],
    reply: "Funcionamos das 9h às 18h, todos os dias."
  },
  contato: {
    keywords: ['telefone', 'contato', 'falar', 'email', 'whatsapp'],
    reply: "Você pode entrar em contato pelo telefone (11) 99999-9999 ou pelo WhatsApp."
  },
  opinião: {
    keywords: ['acho que', 'na minha opinião', 'gostei', 'não gostei', 'parece', 'sinto que'],
    reply: "Agradecemos seu feedback, ele é muito importante para nós!"
  },
  problema_pagamento: {
    keywords: ['pagamento', 'cobrança', 'cartão', 'boleto', 'não pagou'],
    reply: "Se tiver problemas com pagamento, entre em contato com nosso suporte."
  },
  diversão: {
    keywords: ['divertido', 'legal', 'maravilha', 'show', 'top', 'sensacional'],
    reply: "Que bom que você se divertiu! Volte sempre!"
  },
  fotos: {
    keywords: ['foto', 'fotografia', 'imagem', 'selfie', 'foto legal'],
    reply: "Adoramos ver as fotos dos nossos visitantes! Compartilhe sempre com a gente!"
  },
  segurança: {
    keywords: ['segurança', 'perigo', 'riscos', 'protegido', 'safe'],
    reply: "Sua segurança é nossa prioridade máxima!"
  },
  família: {
    keywords: ['família', 'crianças', 'pais', 'filhos', 'amigos'],
    reply: "Aqui é lugar perfeito para curtir com a família e amigos!"
  },
  espera: {
    keywords: ['fila', 'espera', 'demora', 'tempo', 'atraso'],
    reply: "Estamos trabalhando para diminuir o tempo de espera!"
  },
  //ideia para implementar mini desafios para cativar os visitantes
  mini_desafios: {
    keywords: ['amei', 'amei demais', 'muito bom', 'experiência', 'volto sempre', 'quero voltar'],
    reply: "Posta uma foto marcando a gente e concorra a um brinde exclusivo! 📸🎁"
  },
  diversao_visual: {
    keywords: ['me diverti', 'demais', 'incrível', 'animal', 'topzera'],
    reply: "Que bom que se divertiu! 🥳 Dá uma olhada nesse selo exclusivo que preparamos pra você: https://i.imgur.com/radical-selo.png"
  }
};


// Função para detectar intenção baseada em keywords
function detectIntent(message) {
  const lower = message.toLowerCase();
  for (const intentName in intents) {
    const intent = intents[intentName];
    if (intent.keywords.some(keyword => lower.includes(keyword))) {
      return intent.reply;
    }
  }
  return null;
}

app.post('/process-message', (req, res) => {
  const { message } = req.body;

  const reply = detectIntent(message);

  if (reply) {
    return res.json({ reply });
  } else {
    // Caso não entenda, encaminha para atendente humano (simulação)
    return res.json({ reply: "Não entendi sua pergunta. Vou encaminhar para um atendente. Por favor, aguarde..." });
  }
});

app.listen(PORT, () => {
  console.log(`🤖 Bot Node.js rodando na porta ${PORT}`);
});
