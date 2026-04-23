const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');
const aiRoutes = require('./routes/ai.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/dashboard', (req, res) => {
  res.json({
    total: 100,
    low: 5
  });
});


app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', aiRoutes);

module.exports = app;
