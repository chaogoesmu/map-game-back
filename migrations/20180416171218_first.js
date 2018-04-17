
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.integer('gamesPlayed').notNullable().defaultsTo(0)
    table.integer('captures').notNullable().defaultsTo(0)
    table.integer('caught').notNullable().defaultsTo(0)
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
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
*/
