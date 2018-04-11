const env = 'development';
const config = require('../knex')[env];
const knex = require('knex')(config);

let exportMe = {
  

}

module.exports = exportMe;

/*
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR,
    password    VARCHAR,
    gamesPlayed INT,
    captures    INT,
    caugh       INT
);

CREATE TABLE games(
  id  SERIAL PRIMARY KEY,
  pid INT,
  name  VARCHAR,
  startLat  FLOAT,
  startLong FLOAT,
  open      BOOL
);

CREATE TABLE usersInGames(
  gid   INT REFERENCES games ('id') orders ON DELETE CASCADE,
  pid   INT,
  lat   FLOAT,
  long  FLOAT,
  captured  BOOL
);

*/
