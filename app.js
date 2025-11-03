// (Este es el app.js corregido)

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// 1. SOLUCIÓN: Usar la variable de entorno que pasamos desde docker-compose.yml
// process.env.MONGODB_URI tendrá el valor 'mongodb://mongo:27017/estudiantesdb'
const mongoDBURI = process.env.MONGODB_URI;

mongoose.connect(mongoDBURI)
.then(() => console.log('Conectado a MongoDB exitosamente'))
.catch(err => console.error('Error al conectar a MongoDB:', err));


app.use('/api/estudiantes', require('./routes/estudiantes'));


// 2. SOLUCIÓN: Escuchar en el puerto 3000,
// que es el puerto que el Dockerfile expone.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
