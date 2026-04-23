const pool = require('../config/db');

exports.getProducts = async (req, res) => {
  try {
    console.log('API HIT: /products by', req.user?.username);

    const result = await pool.query(
      'SELECT * FROM products ORDER BY id ASC'
    );

    res.json(result.rows);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    if (!name || quantity === undefined) {
      return res.status(400).json({ error: 'Name and quantity are required' });
    }

    await pool.query(
      'INSERT INTO products(name, quantity) VALUES($1, $2)',
      [name, quantity]
    );

    res.json({ message: 'Added' });
  } catch (error) {
    console.error('ADD ERROR:', error);
    res.status(500).json({ error: 'Insert failed' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await pool.query(
      'DELETE FROM products WHERE id = $1',
      [req.params.id]
    );

    res.json({ message: 'Deleted' });
  } catch (error) {
    console.error('DELETE ERROR:', error);
    res.status(500).json({ error: 'Delete failed' });
  }
};

