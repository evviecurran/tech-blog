const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

        author_id: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freeTableName: true, 
        underscored: true, 
        modelName: "blog",
    }
);

module.exports = Post ;