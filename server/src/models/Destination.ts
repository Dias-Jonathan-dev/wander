import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Destination = sequelize.define(
  "Destination",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    long_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    season: {
      type: DataTypes.ENUM("Été", "Printemps", "Automne", "Hiver"),
      allowNull: true,
    },
    duration: {
      type: DataTypes.ENUM(
        "1h",
        "Demi-journée",
        "Journée entière",
        "2 jours ou plus",
      ),
      allowNull: true,
    },
    location: {
      type: DataTypes.ENUM("France", "Europe", "Mondiale"),
      allowNull: true,
    },
    family_access: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    PMR_access: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    gallery: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "destination",
  },
);

export default Destination;
