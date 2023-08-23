require('dotenv').config();

const Sequelize = require('sequelize');


const sequelize = process.env.JAWSDB_URL 
? new Squelize(process.env.JAWSDB_URL)

: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',

        // figure out what this does and why this should be there and not local host 
        dialectOptions: {
            decimalNumbers: true, 
        },
      });
    
    module.exports = sequelize;