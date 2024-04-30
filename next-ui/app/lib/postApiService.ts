// lib/userService.ts
import mysql from 'mysql2/promise';


// MySQL connection settings
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'pass',  // Replace with your MySQL password
  database: 'boilerplate',  // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export const getPosts = async () => {
    try {
        const query = 'SELECT * FROM posts';
        const results = await pool.query(query);
        const normalizedResults = results.map(item => Object.assign({}, item));
        return normalizedResults[0];
    } 
    catch (error) {
        console.log(error);
        throw error;
    };
};

export const createUser = async (username: string, post: string) => {
  try {
        const query = 'INSERT INTO posts (username, post) VALUES (?, ?)';
        const result = await pool.query(query, [username, post]);
        return result;
  } catch (error) {
        console.log(error);
        throw error;
  };
};
