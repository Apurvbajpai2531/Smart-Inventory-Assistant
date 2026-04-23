const pool = require('../config/db');

exports.getProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
};

exports.createProduct = async (req, res) => {
  const { name, quantity } = req.body;

  await pool.query(
    "INSERT INTO products(name, quantity) VALUES($1,$2)",
    [name, quantity]
  );

  res.json({ message: "Product added" });
};
