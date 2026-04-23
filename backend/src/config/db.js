const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_NAME || "inventorydb",
  port: 5432
});

module.exports = pool;
