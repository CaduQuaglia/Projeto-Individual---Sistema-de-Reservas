const reservaModel = require('../models/reservaModel');

exports.listar = async (req, res) => {
  const reservas = await reservaModel.listarReservas();
  res.render('pages/reservas', {
    reservas,
    mensagem: req.query.mensagem || ''
  });
};

exports.adicionar = async (req, res) => {
  const { nome, quarto, data_inicio, data_fim } = req.body;
  if (nome && quarto && data_inicio && data_fim) {
    await reservaModel.adicionarReserva({ nome, quarto, data_inicio, data_fim });
    res.redirect('/reservas?mensagem=Reserva adicionada com sucesso!');
  } else {
    res.redirect('/reservas?mensagem=Preencha todos os campos.');
  }
};

exports.remover = async (req, res) => {
  const { id } = req.params;
  if (id) {
    await reservaModel.removerReserva(id);
    res.redirect('/reservas?mensagem=Reserva removida com sucesso!');
  } else {
    res.redirect('/reservas?mensagem=Reserva não encontrada.');
  }
};