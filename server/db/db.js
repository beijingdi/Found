const dbParams = process.env.DATABASE_URL 
? {connectionString: process.env.DATABASE_URL}
: {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
  };

const { Pool } = require('pg');
const pool = new Pool(dbParams);


const getUserWithEmail = async (email) => {
  try {
    const result = await pool.query();
    return result.rows[0];
  } 
  catch (err) {
    console.log(err.message)  ;  
  }
}



module.exports = {getUserWithEmail}