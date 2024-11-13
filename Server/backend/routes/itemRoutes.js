const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemsController');
router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/', itemController.getItemById);
router.get('/', itemController.updateItem);
router.get('/', itemController.deleteItem);

module.exports = router;