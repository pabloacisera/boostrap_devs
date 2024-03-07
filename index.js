/**La siguiente es la estructura basica que se podemos crear con express para levantar un srvidor local.
 * con èl, y la herramienta nodemon podemos verificar los cambios producidos en nuestro desarrollo en tiempo real.
 * 
 */
const express = require('express');
const app = express();
const path = require('path');

// Establece la carpeta de archivos estáticos (páginas HTML)
app.use(express.static(path.join(__dirname, '')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});
