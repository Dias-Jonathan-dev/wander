// models/Budget.js
import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Budget = sequelize.define("budget", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
});

export default Budget;
