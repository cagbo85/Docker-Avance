const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bonjour depuis le backend Node.js!');
});

app.listen(3000, () => {
  console.log('Serveur backend démarré sur le port 3000');
});
