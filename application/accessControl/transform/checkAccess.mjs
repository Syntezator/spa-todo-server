import {initDb} from '../../infra/db.mjs';

const db = await initDb();

export const  checkAccess = async (req) => {
  const {magicToken} = req.params;
  const currentAdminQuery = `
    SELECT * FROM "Admin" WHERE "magicToken" = '${magicToken}';
  `;
  const {rows: [currentAdmin]} = await db.query(currentAdminQuery);
  if (!currentAdmin){
    throw new Error('Invalid magic token');   
  }; 
};

export const  checkRole= async (req) => {
  const {magicToken} = req.params;
  const currentAdminQuery = `
    SELECT "role"
    FROM "Admin"
    WHERE "role" = 'master' AND "magicToken" = '${magicToken}';
  `;
  const {rows: [currentAdmin]} = await db.query(currentAdminQuery);
  if (!currentAdmin){
    throw new Error('Invalid role');   
  }; 
};
