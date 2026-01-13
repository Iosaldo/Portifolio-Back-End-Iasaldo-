-- Criar banco de dados
CREATE DATABASE feedback_db;

-- Conectar ao banco
\c feedback_db;

-- Criar tabela de feedback
CREATE TABLE feedback (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Inserir dados de exemplo
INSERT INTO feedback (name, message, rating) VALUES
('João Silva', 'Excelente portfólio! Design muito limpo e profissional.', 5),
('Maria Santos', 'Adorei os projetos apresentados. Muito criativo!', 5);
