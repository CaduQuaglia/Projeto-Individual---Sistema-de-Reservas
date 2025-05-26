const { Pool } = require('pg');

const pool = require('../config/db');

async function listarReservas() {
  const result = await pool.query(`
    SELECT b.id, u.name as nome, b.room_number as quarto, 
           TO_CHAR(b.start_date, 'DD/MM/YYYY') as data_inicio,
           TO_CHAR(b.end_date, 'DD/MM/YYYY') as data_fim
    FROM bookings b
    JOIN users u ON b.user_id = u.id
    ORDER BY b.start_date DESC
  `);
  return result.rows;
}

async function adicionarReserva({ nome, quarto, data_inicio, data_fim }) {
  // Busca ou cria usuário
  let user = await pool.query('SELECT id FROM users WHERE name = $1', [nome]);
  let userId;
  if (user.rows.length === 0) {
    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
      [nome, `${nome.replace(/\s/g, '').toLowerCase()}@exemplo.com`]
    );
    userId = newUser.rows[0].id;
  } else {
    userId = user.rows[0].id;
  }

  // Insere reserva
  await pool.query(
    'INSERT INTO bookings (user_id, room_number, start_date, end_date) VALUES ($1, $2, $3, $4)',
    [userId, quarto, data_inicio, data_fim]
  );
}

async function removerReserva(id) {
  await pool.query('DELETE FROM bookings WHERE id = $1', [id]);
}

module.exports = {
  listarReservas,
  adicionarReserva,
  removerReserva,
};