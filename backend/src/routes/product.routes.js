const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/products', authMiddleware, controller.getProducts);
router.post('/products', authMiddleware, controller.addProduct);
router.delete('/products/:id', authMiddleware, controller.deleteProduct);

module.exports = router;
