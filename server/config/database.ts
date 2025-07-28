import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbName = process.env.DB_NAME || process.env.MYSQLDATABASE;
const dbUser = process.env.DB_USER || process.env.MYSQLUSER;
const dbPassword = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD;
const dbHost = process.env.DB_HOST || process.env.MYSQLHOST;
const dbPort = Number(process.env.DB_PORT || process.env.MYSQLPORT || 3306);

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
