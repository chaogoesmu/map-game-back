const express = require('express');
const app = express();
const controller = require('../interface/games.js');
let placeholder=()=>{}

//app.get('/path', token, function)

app.get('/createGame', placeholder)
app.get('/joinGame', placeholder)
app.get('/findGames', controller.findGame)
app.get('/getActiveUsers', placeholder)
app.get('/playAgain', placeholder)
app.get('/updateLocation', placeholder)
// app.get('', placeholder)
// app.get('', placeholder)

module.exports = app;
