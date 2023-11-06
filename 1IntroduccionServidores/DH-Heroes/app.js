const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => {
    console.log('Servidor corriendo');
});

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/index.html'));
});

app.get('/home', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/index.html'));
});

app.get('/babbage', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/babbage.html'));
});

app.get('/berners-lee', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/berners-lee.html'));
});

app.get('/clarke', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/clarke.html'));
});

app.get('/hamilton', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/hamilton.html'));
});

app.get('/hopper', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/hopper.html'));
});

app.get('/lovelace', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/lovelace.html'));
});

app.get('/turing', (request, response) => {
    response.sendFile( path.join(__dirname, '/views/turing.html'));
});