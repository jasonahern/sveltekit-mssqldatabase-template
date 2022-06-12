import { appConfig } from '../config/appConfig.js';
import { knexSnakeCaseMappers } from 'objection';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: appConfig.dbClient,
  connection: {
    host: appConfig.dbHost,
    database: appConfig.dbDatabase,
    user: appConfig.dbUser,
    password: appConfig.dbPassword,
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
};
