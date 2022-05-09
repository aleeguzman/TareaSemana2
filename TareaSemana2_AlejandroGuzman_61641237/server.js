//npm init
//npm install express --save

var express = require('express'); 
var path = require('path');
var app = express();
var canciones = require('./canciones');
const fs = require('fs');

app.use(express.static('public'));

app.listen(3000, function()
{
    console.log('Escuchando en el puerto 3000');
});

app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname,'public','index.html'));  
});

app.use(function (req, res, next) {
    console.log('middleware server.js');
    next();
  });

app.use('/canciones', canciones);

//Se usa un app.get para cada canción ya que son canciones diferentes. No se usa el mismo archivo.
app.get('/bzrp', function (req, res)
{
    res.download(path.join(__dirname,'public','canciones','bzrp.mp3'),'PAULO LONDRA || BZRP MUSIC SESSION #23.mp3',
    function(err){
        if (err)
            console.log('Ocurrio un error en la descarga.');
        else
            console.log('Descarga exitosa.');
    });
});

app.get('/chance', function (req, res)
{
    res.download(path.join(__dirname,'public','canciones','chance.mp3'),'PAULO LONDRA - CHANCE.mp3',
    function(err){
        if (err)
            console.log('Ocurrio un error en la descarga.');
        else
            console.log('Descarga exitosa.');
    });
});

app.get('/homerun', function (req, res)
{
    res.download(path.join(__dirname,'public','canciones','homerun.mp3'),'PAULO LONDRA - HOMERUN.mp3',
    function(err){
        if (err)
            console.log('Ocurrio un error en la descarga.');
        else
            console.log('Descarga exitosa.');
    });
});

app.get('/plana', function (req, res)
{
    res.download(path.join(__dirname,'public','canciones','plan a.mp3'),'PAULO LONDRA - PLAN A.mp3',
    function(err){
        if (err)
            console.log('Ocurrio un error en la descarga.');
        else
            console.log('Descarga exitosa.');
    });
});

app.get('/poresovine', function (req, res)
{
    res.download(path.join(__dirname,'public','canciones','por eso vine.mp3'),'PAULO LONDRA - POR ESO VINE.mp3',
    function(err){
        if (err)
            console.log('Ocurrio un error en la descarga.');
        else
            console.log('Descarga exitosa.');
    });
});

app.get('/acerca', function(req, res)
{
    res.sendFile(path.join(__dirname,'public','acerca.html'));
});

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});