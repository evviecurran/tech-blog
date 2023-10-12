const Sequelize = require('sequelize');

//allows the use of .env data
require('dotenv').config();

// creates connection to db either local or heroku that uses jawsdb
const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    user: 'root',
    dialect: 'mysql',
    port: 3306
  });

// module.exports = sequelize;


// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
    
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

module.exports = sequelize;