import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

export const Message = sequelize.define('message', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            is: /^[a-zA-Z0-9_-]{3,}$/
        }
    },
    message: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: false
    }
})