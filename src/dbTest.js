// dbTest.js
const { Client } = require('pg');

// Load environment variables from .env file
require('dotenv').config();

// Create a new client instance with the connection string from .env
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to the database successfully.');

        // Optionally, you can run a simple query to confirm the connection
        const res = await client.query('SELECT NOW()');
        console.log('Current time from database:', res.rows[0]);

    } catch (err) {
        console.error('Error connecting to the database:', err.stack);
    } finally {
        // Close the connection
        await client.end();
    }
}

testConnection();
