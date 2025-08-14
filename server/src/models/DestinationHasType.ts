import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const DestinationHasType = sequelize.define(
  "Destination_has_Type",
  {
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: "destination_has_Type",
  },
);

export default DestinationHasType;
