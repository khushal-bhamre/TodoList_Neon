import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// const db = new pg.Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const db = new pg.Client("postgresql://TodoNest_owner:aRiVt4Bz1sug@ep-small-flower-a5l8modc.us-east-2.aws.neon.tech/TodoNest?sslmode=require");

export default db;
