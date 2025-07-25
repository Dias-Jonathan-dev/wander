import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const DestinationHasAtmosphere = sequelize.define(
  "Destination_has_Atmosphere",
  {
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    atmosphere_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: "Destination_has_Atmosphere",
  },
);

export default DestinationHasAtmosphere;
