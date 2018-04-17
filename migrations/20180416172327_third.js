
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersingames', table => {
    table.increments('id').primary()
    table.foreign('gid').references('games.id').onDelete('CASCADE')//on delete cascade?
    table.integer('pid').unique()
    table.float('lat').notNullable().defaultsTo(0)
    table.float('long').notNullable().defaultsTo(0)
    table.boolean('captured').defaultsTo(false)
  })
};

exports.down = function(knex, Promise) {

};
/*
CREATE TABLE usersingames(
  gid   INT REFERENCES games(id) ON DELETE CASCADE,
  pid   INT UNIQUE
  lat   FLOAT,
  long  FLOAT,
  captured  BOOL
);
*/
