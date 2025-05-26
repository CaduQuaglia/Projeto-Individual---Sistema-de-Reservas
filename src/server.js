const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home
app.get('/', (req, res) => {
  res.render('pages/home', { 
    titulo: '',
    mensagem: ''
  });
});

// Rotas de reservas
const reservasRoutes = require('./routes/reservas');
app.use('/reservas', reservasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
