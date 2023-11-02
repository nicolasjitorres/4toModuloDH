const express = require('express');
const path = require('path');
const app = express();
const PUERTO = 3000;


app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.use(express.static("public")); //Se utiliza para obtener archivos estaticos como pueden ser imagenes o estilos, a traves de una ruta especifica.
