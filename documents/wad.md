
<img src="../assets/wad/logointeli.png">


# WAD - Web Application Document - Módulo 2 - Inteli - Projeto Individual

## Nome do Aluno
- <a href="https://github.com/CaduQuaglia">Carlos Eduardo Serrano Quaglia</a>

## Sumário

[1. Introdução](#c1)

[2. Modelo Relacional do Banco de Dados](#c2)

[3. Modelo Físico do Banco de Dados](#c3)

[4. Scripts para Rodar a Aplicação Web](#c4)

<br>


# <a name="c1"></a>1. Introdução

### O projeto se trata de uma aplicação web utilizada por um hotel, "Carlos Hotel", para que os funcionários autorizados possam acessar e organizar as reservas. O sistema gerencia os dados de todos os hóspedes e os mostra de forma fácil e intuitiva de inserir, editar ou remover. <br>
### A aplicação utiliza node.js, express.js seguindo o modelo MVC e PostgreSQL como banco de dados.


# <a name="c2"></a>2. Modelo Relacional do Banco de Dados
<img src="../assets/wad/modelo-banco.png"><br>

# <a name="c3"></a>3. Modelo Físico do Banco de Dados
~~~~sql
-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  room_number VARCHAR(20) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);
~~~~

# <a name="c3"></a>4. Scripts para Rodar a Aplicação Web
### Instalar dependencias
npm install
### Configurar o banco de dados
npm run init.sql
### Rodar o site localmente
node server.js