// Requires
var express = require('express');
var mysql = require('mysql');


// inicializar variables
var app = express();

//conexion amysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data'
});
connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Express server mysql puerto 50: \x1b[32m%s\x1b[0m', 'online');
    }
});

/* connection.query('SELECT 1', function (error, results, fields) {
    if (err){
        throw err;
    } else {
        console.log('Express server mysql puerto 50: \x1b[32m%s\x1b[0m', 'online');
    }
}); */

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// Escuchar peticion
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});