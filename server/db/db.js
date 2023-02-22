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

console.log(process.env.DATABASE_URL)
console.log(dbParams)

const allUsers = async() => {
  try {
    const result = await pool.query(
      `SELECT * FROM users`,[]
    );
    console.log(result);
    return result.rows;
  } catch(err){
    console.log(err);
  }
}

const findUser = async (email) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE email = $1;`,[email]
    );
    return result.rows[0];
  } 
  catch (err) {
    console.log(err);
  }
}

const findById = async (id) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE id = $1`,[id]
    );
    return result.rows[0]
  } catch(err) {
    console.log(err);
  }
}
const createUser = async (name,email,password) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (name,email,password)
       VALUES ($1, $2, $3)
       RETURNING *;`,[name,email,password]
    );
  }
  catch(err) {
    console.log(err.message);
  }
}


module.exports = {allUsers,findUser,findById,createUser};