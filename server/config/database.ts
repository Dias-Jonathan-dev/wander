import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbUrl = process.env.MYSQL_URL || process.env.DATABASE_URL;

let sequelize: Sequelize;

console.log("DB connection info:", {
  url: dbUrl,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
});

if (dbUrl) {
  // En production Railway, utilise l'URL complète
  sequelize = new Sequelize(dbUrl, {
    dialect: "mysql",
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  });
} else {
  // En local, utilise les variables séparées
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbPort = Number(process.env.DB_PORT || 3306);

  sequelize = new Sequelize(
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
}

export default sequelize;
