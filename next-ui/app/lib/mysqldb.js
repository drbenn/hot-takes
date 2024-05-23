"use server";

import { revalidatePath } from "next/cache";
import mysql from 'mysql2/promise';

// dbConfig = {
//     host: 'localhost',
//     port: '3306',
//     user: 'root',  // Replace with your MySQL username
//     password: 'pass',  // Replace with your MySQL password
//     database: 'boilerplate',  // Replace with your database name
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
//   };

export const getAllContributors = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'hot_takes',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute("SELECT id, name, profile_img_url, biography FROM contributors", []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        // console.log(normalizedResults);
        return normalizedResults;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const getAllAiPosts = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'hot_takes',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute("SELECT * FROM ai_posts", []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        const profileImages = await getContributorImages();
        const resultsWithImage = normalizedResults.map(item => {
            return {
                ...item,
                profile_img_url: profileImages[item.contributor_id]
            }
        })
        return resultsWithImage;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const getLatest10AiPosts = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'hot_takes',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute("SELECT * FROM ai_posts ORDER BY create_date DESC LIMIT 5, 5", []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        const profileImages = await getContributorImages();
        const resultsWithImage = normalizedResults.map(item => {
            return {
                ...item,
                profile_img_url: profileImages[item.contributor_id]
            }
        })
        return resultsWithImage;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const getNextLatest10AiPosts = async (skipAmount) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'hot_takes',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(`SELECT * FROM ai_posts ORDER BY create_date DESC LIMIT ${skipAmount}, 10`, []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        const profileImages = await getContributorImages();
        const resultsWithImage = normalizedResults.map(item => {
            return {
                ...item,
                profile_img_url: profileImages[item.contributor_id]
            }
        })
        return resultsWithImage;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const getContributorImages = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'hot_takes',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute("SELECT id, profile_img_url FROM contributors", []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        const imageUrlObject = {};
        normalizedResults.forEach(item => imageUrlObject[item.id] = item.profile_img_url);
        return imageUrlObject;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};



export const getAllPosts = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute("SELECT * FROM posts", []);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        // console.log(normalizedResults);
        return normalizedResults;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const createNewPost = async (post) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(
            `INSERT INTO posts (post) 
            VALUES ('${post}')`
        , []);
        await db.end();
        // // if server status of 0,1, or 2, the insert was successful
        // console.log(result.serverStatus);

        return JSON.stringify({
            status: 'post successful',
            post: post
        });
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};


export const updatePost = async ({postId, post}) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(
            `UPDATE posts
            SET post = '${post}'
            WHERE id = ${postId}`
        , []);
        await db.end();
        // // if server status of 0,1, or 2, the insert was successful
        // console.log(result.serverStatus);

        return JSON.stringify({
            status: 'update successful',
            postId: postId,
            post: post
        });
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};
 


export const deletePostById = async (postId) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(
            `DELETE FROM posts
            WHERE id = ${postId}`
        , []);
        await db.end();
        // // if server status of 0,1, or 2, the insert was successful
        // console.log(result.serverStatus);
        revalidatePath("/mysql-crud");
        return JSON.stringify({
            status: 'delete successful',
            postId: postId
        });
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export const executeQuery = async (query, data) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(query, data);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        // console.log(normalizedResults);
        return normalizedResults;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};




export default getAllPosts;