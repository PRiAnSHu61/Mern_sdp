const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainerController');

router.post('/', trainingController.createTrainer);
router.get('/', trainingController.getAllTrainer);
router.get('/:id', trainingController.getTrainerById);
router.put('/:id', trainingController.updateTrainer);
router.delete('/:id', trainingController.deleteTrainer);

module.exports = router;