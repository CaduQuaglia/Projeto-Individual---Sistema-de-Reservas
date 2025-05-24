// Simulação de banco de dados em memória
let reservas = [];

exports.listar = (req, res) => {
  res.render('pages/reservas', {
    reservas,
    mensagem: req.query.mensagem || ''
  });
};

exports.adicionar = (req, res) => {
  const { nome, quarto, data } = req.body;
  if (nome && quarto && data) {
    reservas.push({ nome, quarto, data });
    res.redirect('/reservas?mensagem=Reserva adicionada com sucesso!');
  } else {
    res.redirect('/reservas?mensagem=Preencha todos os campos.');
  }
};

exports.remover = (req, res) => {
  const idx = parseInt(req.params.idx, 10);
  if (!isNaN(idx) && idx >= 0 && idx < reservas.length) {
    reservas.splice(idx, 1);
    res.redirect('/reservas?mensagem=Reserva removida com sucesso!');
  } else {
    res.redirect('/reservas?mensagem=Reserva não encontrada.');
  }
};