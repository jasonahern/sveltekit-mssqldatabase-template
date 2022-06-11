const appConfig = require('../config/appConfig');
const { knexSnakeCaseMappers } = require('objection');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: appConfig.dbClient,
    connection: {
      host: appConfig.dbHost,
      database: appConfig.dbDatabase,
      user:     import.meta.env.USER, //cannot get the user to assign through appConfig, so used process.env instead
      password: import.meta.env.PASSWORD, //cannot get the password to assign through appConfig, so used process.end instead
      options: {
        port: 1433,
        enableArithAbort: true,
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  }
};
