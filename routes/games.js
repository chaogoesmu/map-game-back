const express = require('express');
const app = express();
const controller = require('../interface/games.js');
let placeholder=()=>{}

//app.get('/path', token, function)

app.get('/createGame', placeholder)
app.get('/joinGame', placeholder)
app.get('/findGames', placeholder)
app.get('/getActiveUsers', placeholder)
app.get('/playAgain', placeholder)
// app.get('', placeholder)
// app.get('', placeholder)

module.exports = app;
