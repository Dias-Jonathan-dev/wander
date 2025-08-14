import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const DestinationHasAtmosphere = sequelize.define(
  "DestinationHasAtmosphere",
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
    tableName: "destination_has_atmosphere",
  },
);

export default DestinationHasAtmosphere;
