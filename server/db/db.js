const dbParams = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };

const { Pool } = require('pg');
const pool = new Pool(dbParams);


console.log(dbParams)

const allUsers = async () => {
  try {
    const result = await pool.query(
      `SELECT * FROM users`, []
    );
    console.log(result);
    return result.rows;
  } catch (err) {
    console.log(err);
  }
}

const findUser = async (email) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE email = $1;`, [email]
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
      `SELECT * FROM users WHERE id = $1`, [id]
    );
    return result.rows[0]
  } catch (err) {
    console.log(err);
  }
}

const createUser = async (name, email, password) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (name,email,password)
       VALUES ($1, $2, $3)
       RETURNING *;`, [name, email, password]
    );
    return result.rows[0]
  }
  catch (err) {
    console.log(err.message);
  }
}

const allTrips = async () => {
  try {
    const result = await pool.query(
      `SELECT * FROM trips;`
    );
    return result.rows;
  } catch (err) {
    console.log(err.messages);
  }
}

const getTrip = async(tripId) => {
  try {
    const result = await pool.query(
      `SELECT * FROM trips
       WHERE id = $1`,[tripId]
    );
    return result.rows[0];
  } catch (err) {
    console.log(err.messages);
  }
}


const bookTrip = async (userId, tripId) => {
  try {
    await pool.query(
      `INSERT INTO bookings (user_id,trip_id)
         VALUES($1, $2, $3)
         RETURNING *;`, [userId, tripId]
    );
    await pool.query(
      `UPDATE trips
         SET available_spots = availables_spots - 1
         WHERE id = $1
         RETURNING *;`, [tripId]
    );
    return
  } catch (err) {
    console.log(err.message);
  }
}



module.exports = { allUsers, findUser, findById, createUser, allTrips, getTrip};