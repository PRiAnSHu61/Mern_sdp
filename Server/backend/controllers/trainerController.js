const Trainer = require('../models/trainer');

exports.createTrainer = async(req, res) => {
    try{
        const trainer = new Trainer(req.body);
        const savedTrainer = await trainer.save();
        res.status(201).json(savedTrainer);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.getAllTrainer = async (req, res) => {
    try {
      const trainer = await Trainer.find();
      res.status(200).json(trainer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getTrainerById = async (req, res) => {
    try {
      const trainer = await Trainer.findOne({ _id: req.params.id });
      if (!trainer) return res.status(404).json({ message: "Trainer not found" });
      res.status(200).json(trainer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateTrainer = async (req, res) => {
    try {
      const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedTrainer)
        return res.status(404).json({ message: "Rating not found" });
      res.status(200).json(updatedTrainer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteTrainer = async (req, res) => {
    try {
      const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);
      if (!deletedTrainer)
        return res.status(404).json({ message: "Rating not found" });
      res.status(200).json({ message: "Trainer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  