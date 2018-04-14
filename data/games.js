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
    .where({open:true});
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
  },
  updateLocation: (gameID, pID,pLat, pLong)=>{
    return knex('usersInGames')
    .where({gid: gameID, pid: pID})
    .update({lat: pLat, long: pLong,})
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
  gid   INT REFERENCES games(id) ON DELETE CASCADE,
  pid   INT,
  lat   FLOAT,
  long  FLOAT,
  captured  BOOL
);



Table "public.games"
Column   |       Type        |                     Modifiers                      | Storage  | Stats target | Description
-----------+-------------------+----------------------------------------------------+----------+--------------+-------------
id        | integer           | not null default nextval('games_id_seq'::regclass) | plain    |              |
pid       | integer           |                                                    | plain    |              |
name      | character varying |                                                    | extended |              |
startlat  | double precision  |                                                    | plain    |              |
startlong | double precision  |                                                    | plain    |              |
open      | boolean           |                                                    | plain    |              |
Indexes:
"games_pkey" PRIMARY KEY, btree (id)


*/
