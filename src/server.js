const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Define o EJS como engine de views
app.set('views', __dirname + '/views'); // Define a pasta de views, se necessário

// Middleware para processar JSON
app.use(express.json());

// Rotas
const routes = require('./routes/index');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});