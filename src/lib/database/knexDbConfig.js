import 'dotenv/config';

//const appConfig = require('../config/appConfig');
import { appConfig } from '../config/appConfig';

export const KnexConfig = {
  client: appConfig.dbClient,
  connection: {
    host : appConfig.dbHost,
    user : appConfig.dbUser,
    password : appConfig.dbPassword,
    database : appConfig.dbDatabase,
    options: {
      port: 1433,
      enableArithAbort: true,
    }
  }
}


// module.exports = KnexConfig;
// const knex = require('knex')({
//     client: 'mssql',
//     connection: {
//       host : process.env.HOST,
//       user : process.env.USER,
//       password : process.env.PASSWORD,
//       database : process.env.DATABASE,
//       options: {
//         port: 1433,
//         enableArithAbort: true,
//       }
//     }
//   });

//module.exports  =  KnexConfig;