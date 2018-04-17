const express = require('express');
const app = express();
const controller = require('../interface/games.js');
let placeholder=(req,res)=>{return res.status(200).send('placholder');}

//app.get('/path', token, function)

app.post('/createGame', controller.createGame)//
app.post('/joinGame', controller.joinGame)
app.get('/findGames', controller.findGame)
app.post('/getActiveUsers', controller.getActiveUsers)
app.post('/capture', controller.capture)
app.get('/playAgain', placeholder)
app.get('/updateLocation', controller.updateLocation)
app.post('/quit', controller.quit)
app.post('/updateItLocation', controller.updateItLocation)
app.post('/getItLocation', controller.updateItLocation)
app.post('/deleteGame', controller.deleteGame)

module.exports = app;
