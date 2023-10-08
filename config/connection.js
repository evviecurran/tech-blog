const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
?  new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
}) ;

module.exports = sequelize;

// let sequelize; 

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);

// } else {
//   sequelize =   (process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3000

// });

// const sequelize = process.env.JAWSDB_URL 
// ? new Sequelize(process.env.JAWSDB_URL)

// : new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//         host: 'localhost',
//         dialect: 'mysql',

//         // figure out what this does and why this should be there and not local host 
//         dialectOptions: {
//             decimalNumbers: true, 
//         },
//       });
    
//     module.exports = sequelize;