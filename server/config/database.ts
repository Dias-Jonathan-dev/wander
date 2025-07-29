import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbName = process.env.MYSQLDATABASE || process.env.DB_NAME;
const dbUser = process.env.MYSQLUSER || process.env.DB_USER;
const dbPassword = process.env.MYSQLPASSWORD || process.env.DB_PASSWORD;
const dbHost = process.env.MYSQLHOST || process.env.DB_HOST;
const dbPort = Number(process.env.MYSQLPORT || process.env.DB_PORT || 3306);

console.log("DB connection info:", {
  dbName,
  dbUser,
  dbHost,
  dbPort,
});

const sequelize = new Sequelize(
  dbName as string,
  dbUser as string,
  dbPassword as string,
  {
    host: dbHost,
    port: dbPort,
    dialect: "mysql",
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  },
);

export default sequelize;
