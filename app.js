const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})