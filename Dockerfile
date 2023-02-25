# Etapa 1: construir o aplicativo React
FROM node:latest as build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . /app

# Instala as dependências e compila o aplicativo React
RUN npm install
RUN npm run build

# Etapa 2: usar o servidor web Nginx para hospedar o aplicativo
FROM nginx:latest

# Copia os arquivos de construção do aplicativo React para o diretório do servidor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia o arquivo de configuração do Nginx para o contêiner
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 do contêiner
EXPOSE 80

# Inicie o servidor Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]