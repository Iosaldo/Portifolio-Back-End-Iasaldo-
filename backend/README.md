# Feedback API

API REST para sistema de feedback do portfólio pessoal.

 Stack

- Node.js
- Express
- PostgreSQL
- Rate Limit
- Validação de dados

Funcionalidades

- Criar feedback com nome, mensagem e rating
- Listar feedbacks
- Proteção contra spam (rate limit)
- Validação de dados no backend

## Base de dados

SQL

CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT NOW()
);
