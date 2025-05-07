# syntax=docker/dockerfile:1
FROM node:20-bullseye

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar apenas arquivos de definição de dependências para instalar primeiro
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci --legacy-peer-deps

# Copiar o restante do código
COPY . .

# Porta exposta (match com vite.config.ts)
EXPOSE 8080

# Comando padrão
CMD ["npm", "run", "dev"] 