'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mapgame'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
