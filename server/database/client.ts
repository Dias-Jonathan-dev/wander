// Get variables from .env file for database connection
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  MYSQLHOST,
  MYSQLPORT,
  MYSQLUSER,
  MYSQLPASSWORD,
  MYSQLDATABASE,
} = process.env;

// Create a connection pool to the database
import mysql from "mysql2/promise";

const client = mysql.createPool({
  host: DB_HOST || MYSQLHOST,
  port: Number.parseInt((DB_PORT || MYSQLPORT) as string),
  user: DB_USER || MYSQLUSER,
  password: DB_PASSWORD || MYSQLPASSWORD,
  database: DB_NAME || MYSQLDATABASE,
});

// Ready to export
export default client;

// Types export
import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";

type DatabaseClient = Pool;
type Result = ResultSetHeader;
type Rows = RowDataPacket[];

export type { DatabaseClient, Result, Rows };
