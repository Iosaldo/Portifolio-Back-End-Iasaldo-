# Configurar MongoDB para Feedback API

## Opção 1: MongoDB Atlas (Cloud - Recomendado) ☁️

### 1️⃣ Criar conta gratuita

1. Acesse: https://www.mongodb.com/cloud/atlas/register
2. Crie uma conta gratuita (tier gratuito oferece 512MB)

### 2️⃣ Criar Cluster

1. Escolha o plano **FREE** (M0)
2. Selecione região mais próxima (ex: AWS - São Paulo)
3. Clique em "Create Cluster"

### 3️⃣ Criar usuário de banco de dados

1. Em "Security" → "Database Access"
2. Clique em "Add New Database User"
3. Crie usuário e senha (guarde as credenciais!)
4. Permissões: "Read and write to any database"

### 4️⃣ Configurar IP de acesso

1. Em "Security" → "Network Access"
2. Clique em "Add IP Address"
3. Selecione "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirme

### 5️⃣ Obter connection string

1. No cluster, clique em "Connect"
2. Escolha "Connect your application"
3. Copie a connection string (formato: `mongodb+srv://...`)
4. Substitua `<password>` pela senha do usuário criado

### 6️⃣ Configurar .env

```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME=feedback_db
```

---

## Opção 2: MongoDB Local 💻

### 1️⃣ Instalar MongoDB Community

**Windows:**

1. Baixe: https://www.mongodb.com/try/download/community
2. Execute o instalador
3. Escolha "Complete" installation
4. Marque "Install MongoDB as a Service"

**Verificar instalação:**

```bash
mongod --version
```

### 2️⃣ Iniciar MongoDB

```bash
# Windows (como serviço)
net start MongoDB

# Ou manualmente
mongod --dbpath C:\data\db
```

### 3️⃣ Configurar .env

```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=feedback_db
```

---

## ✅ Testar Conexão

Após configurar o .env, inicie a API:

```bash
cd feedback-api
npm run dev
```

Você deve ver:

```
✅ Conectado ao MongoDB
🚀 API running on port 3001
```

---

## 🔄 Alternar entre bancos de dados

Para alternar entre MongoDB, PostgreSQL ou em memória, edite:

**`src/controllers/feedback.controller.js`**

```js
// MongoDB
import * as service from "../services/feedback.service.mongodb.js";

// PostgreSQL
import * as service from "../services/feedback.service.js";

// Em memória (desenvolvimento)
import * as service from "../services/feedback.service.memory.js";
```

---

## 📊 Visualizar dados

### MongoDB Compass (GUI)

- Download: https://www.mongodb.com/products/compass
- Conecte usando sua MONGODB_URI
- Navegue: `feedback_db` → `feedbacks`

### MongoDB Atlas Dashboard

- Acesse: https://cloud.mongodb.com
- "Browse Collections" no seu cluster

---

## ⚠️ Nota Importante

Se MongoDB não estiver disponível e você quiser testar imediatamente, use o serviço em memória alterando o controller:

```js
import * as service from "../services/feedback.service.memory.js";
```

Isso permite desenvolver sem banco de dados instalado.
