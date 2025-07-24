import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Atmosphere = sequelize.define("Atmosphere", {
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

export default Atmosphere;
