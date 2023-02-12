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


const findUser = async (email) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users
       WHERE email = $1`,[email]
    );
    return result.rows[0];
  } 
  catch (err) {
    console.log(err);
  }
}

const createUser = async (email,password,name) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (email,password,name)
       VALUES ($1, $2, $3)
       RETURNING *;`,[email,password,name]
    );
  }
  catch(err) {
    console.log(err.message);
  }
}


module.exports = {getUserWithEmail, createUser};