# Use Node 20 LTS
FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm ci --only=production

# Copia código da aplicação
COPY . .

# Expõe porta da API
EXPOSE 3001

# Define variável de ambiente
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["npm", "start"]
