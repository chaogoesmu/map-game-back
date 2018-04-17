
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
debugger
//let knex = require('./connection')
const cors = require('cors')

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
//app.use(cors({ exposedHeaders: 'Auth'}))//, allowedHeaders: '*'
app.use(cors())//, allowedHeaders: '*'

app.use(bodyParser.json());
app.get('/test', (req, res) => {
  console.log(req.headers)
  res.json({})
})



let users = require('./routes/users.js');
let games = require('./routes/games.js');

app.use('',users );
app.use('',games );

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`listening on: ${port}!`)
  })
}

module.exports = app
