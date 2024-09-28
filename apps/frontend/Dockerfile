# Usando uma imagem Node.js para construir o projeto React
FROM node:21-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar todas as dependências, incluindo devDependencies
RUN npm install

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta que o Vite usa (geralmente 3000)
EXPOSE 3001

# Comando para rodar o Vite em modo de desenvolvimento
CMD ["npm", "run", "dev"]
