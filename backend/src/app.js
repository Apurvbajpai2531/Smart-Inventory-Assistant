const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/product.routes');

app.use('/api/products', productRoutes);

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    total: 100,
    low: 5
  });
});

module.exports = app;
