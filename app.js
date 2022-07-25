const express = require('express');
const pdf = require('html-pdf');
const fs = require('fs');

const app = express();
const port = 3000;

const template = require.resolve("./public/factura.html");
let contentHTML = fs.readFileSync(template, 'utf-8');

const factura = {
    cliente: "Rafael Carpio",
    fecha: "01-01-2022",
    numero: 1,
    vendedor: "Juan Perez"
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/factura', (req, res) => {
    contentHTML = contentHTML.replace("{{nombreCliente}}", factura.cliente);
    contentHTML = contentHTML.replace("{{fecha}}", factura.fecha);
    contentHTML = contentHTML.replace("{{facturaNum}}", factura.numero);
    contentHTML = contentHTML.replace("{{nombreCliente}}", factura.cliente);
    contentHTML = contentHTML.replace("{{nombreVendedor}}", factura.vendedor);

    pdf.create(contentHTML).toStream((error, stream) => {
        if(error){
            res.end("Error creando el PDF: " + error);
        } else {
            res.setHeader("Content-Type", "application/pdf");
            stream.pipe(res);
        }
    })
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})