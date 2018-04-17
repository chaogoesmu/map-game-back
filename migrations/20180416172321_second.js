
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments('id').primary()
    table.integer('pid').notNullable()
    table.string('name').notNullable()
    table.float('startLat').notNullable()
    table.float('startLong').notNullable()
    table.boolean('open')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
/*

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
