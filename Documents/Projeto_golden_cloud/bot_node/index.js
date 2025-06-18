// index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/process-message', (req, res) => {
  const { message } = req.body;

  let reply = "Não entendi, pode repetir?";
  
  if (message.toLowerCase().includes('oi')) {
    reply = "Olá! Como posso te ajudar hoje?";
  } else if (message.toLowerCase().includes('instagram')) {
    reply = "Você gostaria de ver as últimas interações do Instagram?";
  } else if (message.toLowerCase().includes('obrigado')) {
    reply = "De nada! Estou aqui para ajudar.";
  }

  return res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`🤖 Bot Node.js rodando na porta ${PORT}`);
});
