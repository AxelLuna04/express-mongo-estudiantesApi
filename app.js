const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoDBURI = process.env.MONGODB_URI;

mongoose.connect(mongoDBURI)
.then(() => console.log('Conectado a MongoDB exitosamente'))
.catch(err => console.error('Error al conectar a MongoDB:', err));


app.use('/api/estudiantes', require('./routes/estudiantes'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
