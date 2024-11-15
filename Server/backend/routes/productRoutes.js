const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Review routes
router.post('/:id/reviews', productController.addReview);
router.put('/:id/reviews/:reviewId', productController.updateReview);
router.delete('/:id/reviews/:reviewId', productController.deleteReview);

module.exports = router;
