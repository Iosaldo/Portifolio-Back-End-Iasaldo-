# Portfolio - Iosaldo

Portfolio profissional desenvolvido com Next.js e Express.js, apresentando projetos, habilidades e permitindo feedback dos visitantes.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Funcionalidades](#funcionalidades)
- [API Endpoints](#api-endpoints)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este é um portfolio profissional completo com:

- **Frontend**: Aplicação Next.js 14+ com React, utilizando App Router
- **Backend**: API REST construída com Express.js e MongoDB
- Sistema de feedback integrado
- Interface responsiva e moderna

## 📁 Estrutura do Projeto

```
React-Portifolio-Back-End/
├── frontend/              # Aplicação Next.js
│   ├── public/           # Arquivos estáticos
│   ├── src/
│   │   ├── app/          # Pages e layouts (App Router)
│   │   ├── components/   # Componentes React
│   │   ├── lib/          # Utilitários
│   │   └── store/        # Estado global (Zustand)
│   ├── package.json
│   └── next.config.mjs
│
├── backend/              # API Express.js
│   ├── src/
│   │   ├── config/       # Configurações do banco de dados
│   │   ├── controllers/  # Controladores da API
│   │   ├── middlewares/  # Middlewares (validação, rate limit)
│   │   ├── routes/       # Rotas da API
│   │   └── services/     # Lógica de negócio
│   ├── database/         # Scripts SQL
│   ├── package.json
│   └── .env
│
└── README.md            # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15.1.4** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework CSS utilitário
- **Zustand** - Gerenciamento de estado
- **Framer Motion** - Animações
- **Park UI** - Componentes de interface

### Backend

- **Express.js** - Framework Node.js
- **MongoDB** - Banco de dados NoSQL
- **PostgreSQL** - Banco de dados relacional (alternativo)
- **Express Validator** - Validação de dados
- **Express Rate Limit** - Limitação de requisições
- **CORS** - Controle de acesso
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Hot reload para desenvolvimento

## 📦 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MongoDB](https://www.mongodb.com/) (Community Edition)
- [Git](https://git-scm.com/)
- npm ou yarn (gerenciador de pacotes)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/Iosaldo/Portifolio-Back-End-Iasaldo-.git
cd Portifolio-Back-End-Iasaldo-
```

### 2. Configurar o Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend`:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/feedback_db
# ou para PostgreSQL:
# DATABASE_URL=postgresql://user:password@localhost:5432/feedback_db
```

Inicie o MongoDB (em outro terminal):

```bash
mongod
```

Execute o backend:

```bash
npm run dev
```

O backend estará rodando em `http://localhost:3001`

### 3. Configurar o Frontend

Abra um novo terminal:

```bash
cd frontend
npm install
```

Execute o frontend:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## ✨ Funcionalidades

### Frontend

- ✅ Página inicial com informações pessoais
- ✅ Seção de projetos com filtros
- ✅ Seção de habilidades técnicas
- ✅ Seção de educação e formação
- ✅ Sistema de feedback integrado
- ✅ Suporte para múltiplos idiomas (PT/EN)
- ✅ Tema responsivo
- ✅ Animações suaves
- ✅ Footer com copyright

### Backend

- ✅ API RESTful para feedbacks
- ✅ Validação de dados com Express Validator
- ✅ Rate limiting para proteção contra spam
- ✅ Suporte para MongoDB e PostgreSQL
- ✅ CORS configurado
- ✅ Tratamento de erros
- ✅ Sistema de logging

## 🔌 API Endpoints

### Feedback Routes

| Método | Endpoint            | Descrição                |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/feedback`     | Lista todos os feedbacks |
| GET    | `/api/feedback/:id` | Busca feedback por ID    |
| POST   | `/api/feedback`     | Cria novo feedback       |
| DELETE | `/api/feedback/:id` | Remove feedback          |

### Exemplo de Request - Criar Feedback

```bash
POST http://localhost:3001/api/feedback
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "message": "Excelente portfolio!"
}
```

### Exemplo de Response

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com",
  "message": "Excelente portfolio!",
  "createdAt": "2026-01-13T10:30:00.000Z"
}
```

## 🔐 Variáveis de Ambiente

### Backend (.env)

```env
# Porta do servidor
PORT=3001

# MongoDB
MONGODB_URI=mongodb://localhost:27017/feedback_db

# PostgreSQL (alternativo)
DATABASE_URL=postgresql://user:password@localhost:5432/feedback_db

# Ambiente
NODE_ENV=development
```

### Frontend (next.config.mjs)

```javascript
env: {
  NEXT_PUBLIC_API_URL: "http://localhost:3001";
}
```

## 📝 Scripts Disponíveis

### Frontend

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter
```

### Backend

```bash
npm run dev      # Inicia servidor com nodemon
npm start        # Inicia servidor de produção
npm run seed     # Popula banco de dados com dados de exemplo
```

## 🗄️ Banco de Dados

### MongoDB

O projeto utiliza MongoDB como banco de dados principal. A collection `feedbacks` armazena os dados com o seguinte schema:

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

### Configurar MongoDB

1. Instale o MongoDB Community Edition
2. Inicie o serviço: `mongod`
3. O backend se conectará automaticamente em `mongodb://localhost:27017/feedback_db`

### PostgreSQL (Alternativo)

O projeto também suporta PostgreSQL. O schema está em `backend/database/schema.sql`:

```sql
CREATE TABLE feedbacks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Personalização

### Temas e Cores

As cores e temas podem ser personalizados em:

- `frontend/src/app/globals.css` - Variáveis CSS globais
- `frontend/tailwind.config.js` - Configurações do Tailwind

### Conteúdo

- Projetos: `frontend/src/components/dashboard/Projects.js`
- Habilidades: `frontend/src/components/dashboard/Skills.js`
- Sobre: `frontend/src/components/dashboard/About.js`
- Educação: `frontend/src/components/dashboard/Education.js`

## 🐳 Docker (Opcional)

### Frontend

```bash
cd frontend
docker build -t portfolio-frontend .
docker run -p 3000:3000 portfolio-frontend
```

### Backend

```bash
cd backend
docker build -p portfolio-backend .
docker run -p 3001:3001 portfolio-backend
```

## 🔧 Troubleshooting

### Erro de conexão com MongoDB

```bash
# Verifique se o MongoDB está rodando
sudo systemctl status mongod

# Inicie o MongoDB
sudo systemctl start mongod
```

### Porta já em uso

```bash
# Encontre o processo usando a porta
lsof -i :3000  # ou :3001

# Mate o processo
kill -9 <PID>
```

### Erro de CORS

Certifique-se de que o backend está configurado para aceitar requisições do frontend:

```javascript
// backend/src/app.js
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Iosaldo**

- GitHub: [@Iosaldo](https://github.com/Iosaldo)
- Portfolio: [em construção]

## 📞 Contato

Para mais informações ou suporte, entre em contato através do formulário de feedback no portfolio.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ por Iosaldo**
