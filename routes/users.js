const express = require('express');
const app = express();
const controller = require('../interface/users.js');

let placeholder=()=>{}

//app.get('/path', token, function)

app.get('/login', controller.login)
app.get('/createUser', controller.createUser)
app.get('/inviteUsers', placeholder)
app.get('/getStats', placeholder)

module.exports = app;
