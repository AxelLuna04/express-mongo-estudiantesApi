# (Pon esto en C:\guest6\express-mongo-estudiantesApi\Dockerfile)

# Usamos una imagen ligera de Node.js
FROM node:18-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# La aplicación expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]