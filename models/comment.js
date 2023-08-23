const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
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
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: "blog",
                key: "id",
            },
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
        modelName: "comments",
    }
);

module.exports = Comments;