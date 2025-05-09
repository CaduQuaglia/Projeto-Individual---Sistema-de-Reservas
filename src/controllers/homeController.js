// Controlador da rota /
exports.index = (req, res) => {
    res.render('pages/home', {
      titulo: 'Reservas Carlos Hotel',
      mensagem: 'Bem-vindo ao nosso site de reservas! Estamos felizes em tê-lo aqui.',
    });
  };