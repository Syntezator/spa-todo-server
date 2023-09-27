import dotenv from 'dotenv';
import pg from 'pg';

const {NODE_ENV} = process.env;
if(NODE_ENV === 'dev') dotenv.config();

const {DB_CONNECTION_STRING} = process.env;

/**
 * @function initDb
 * @typedef {import('pg').Pool} DbPool
 * @returns {Promise<DbPool>} DbPool
 */

export const initDb = async () => {
  const connectionString = DB_CONNECTION_STRING;
  const db = new pg.Pool({connectionString}); 
  await db.connect(); 
  return db;  
};
