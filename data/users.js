const env = 'development';
const config = require('../knex')[env];
const knex = require('knex')(config);

let exportMe = {
  createUser:(name, pw)=>{
    return knex('users')
    .insert({username:name, password:pw, gamesplayed:0,captures:0,caught:0})
  },

  login:(un,pw)=>{
    return knex('users')
    .where({username:un, password:pw})
    .select('username','id')
  }
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

*/
