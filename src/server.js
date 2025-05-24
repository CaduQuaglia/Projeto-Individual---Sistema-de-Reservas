const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas principais
const reservasRoutes = require('./routes/reservas');
const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);
app.use('/reservas', reservasRoutes);

// Redireciona a home para /reservas (opcional, se quiser que a home seja a lista de reservas)
app.get('/', (req, res) => {
  res.redirect('/reservas');
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});