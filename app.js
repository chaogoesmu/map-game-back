
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const env = 'development';
const config = require('./knex')[env];
const knex = require('knex')(config);
const cors = require('cors')

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(bodyParser.json());
app.get('/test', (req, res) => {
  console.log(req.headers)
  res.json({})
})
app.use(cors({ exposedHeaders: 'Auth'}))//, allowedHeaders: '*'


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
/*
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR,
    password    VARCHAR,
    gamesPlayed INT,
    captures    INT,
    caught       INT
);

CREATE TABLE games(
  id  SERIAL PRIMARY KEY,
  pid INT,
  name  VARCHAR,
  startLat  FLOAT,
  startLong FLOAT
);

CREATE TABLE usersInGames(
  gid   INT REFERENCES games ('id') orders ON DELETE CASCADE,
  pid   INT,
  lat   FLOAT,
  long  FLOAT,
  captured  BOOL
);

*/
