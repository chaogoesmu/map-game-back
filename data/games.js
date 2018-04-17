const env = 'development';
const config = require('../knex')[env];
const knex = require('knex')(config);

let exportMe = {
  createGame: (userID, roomName, pLat, pLong)=>{
    //code to create a new game
    return knex('games')
    .returning('id')
    .insert({
      pid:userID,
      name: roomName,
      open: true,
      startlat: pLat,
      startlong: pLong
    });
  },
  joinGame:(gameID, pID,pLat, pLong)=>{
    console.log(gameID, pID,pLat, pLong)
    return knex('usersingames')
    .returning('gid')
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
    return knex('usersingames')
    .select('lat','long','pid')
    .where({gid:gameID, captured:capped})
  },
  activateGame: (gameID)=>{
    return knex('usersingames')
    .where({gid: gameID})
    .update({captured: false})
  },
  updateLocation: (gameID, pID,pLat, pLong)=>{
    return knex('usersingames')
    .where({gid: gameID, pid: pID})
    .update({lat: pLat, long: pLong})
  },
  quit: (pID)=>{
    return knex('usersingames')
    .del('*')
    .where({pid: pID})
  },
  quitController:(pID)=>{
    return knex('game')
    .del('*')
    .where({pid: pID})
  },
  captured:(pIDTarget, pIDCapture)=>{
    knex('usersingames')
    .update({captured:true})
    .where({pid: pIDTarget})
    .then(x=>{
      knex('users')
      .select('caught')
      .where({id:pIDCapture})
      .then(x=>{
        knex('users')
        .where({id:pIDCapture})
        .update({caught:x+1})
      })
      .catch(err=>{console.log(err)})
    })
    .catch(err=>{console.log(err)})
  },
  updateItLocation:(gID, pID, pLat, pLong)=>{
    return knex('games')
    .where({id:gID, pid:pID})
    .update({startLat: pLat, startLong: pLong})
  },
  getGame:(gID)=>{
    return knex('games')
    .where({id:gID})
    .select('*')
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

CREATE TABLE usersingames(
  gid   INT REFERENCES games(id) ON DELETE CASCADE,
  pid   INT UNIQUE
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
