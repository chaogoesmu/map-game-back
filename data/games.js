const env = 'development';
const config = require('../knex')[env];
const knex = require('knex')(config);

let exportMe = {
  createGame: (userID, roomName, pLat, pLong)=>{
    //code to create a new game
    return knex('games')
    .insert({
      pid:userID,
      name: roomName,
      startLat: pLat,
      startLong: pLong
    });
  },
  joinGame:(gameID, pID,pLat, pLong)=>{
    return knex('usersInGame')
    .insert({
      gid: gameID,
      pid: pID,
      lat: pLat,
      long: pLong,
      captured: false
    });
  },
  getGames:(pLat, pLong)=>{
    return knex('games')
    .select({open:true});
  },
  getActiveUsers: (gameID, capped=false)=>{
    return knex('usersInGames')
    .select('lat','long','pid')
    .where({gid:gamedID, captured:capped})
  },
  activateGame: (gameID)=>{
    return knex('usersInGames')
    .where({gid: gameID})
    .update({captured: false})
  }
};

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
