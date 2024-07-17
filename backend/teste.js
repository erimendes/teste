const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    client.end();
  })
  .catch(err => console.error('Connection error', err.stack));
