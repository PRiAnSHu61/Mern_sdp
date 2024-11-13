const Rating = require("../models/rating");

exports.createRating = async (req, res) => {
  try {
    const rating = new Rating(req.body);
    const savedRating = await rating.save();
    res.status(201).json(savedRating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRatingById = async (req, res) => {
  try {
    const rating = await Rating.findOne({ _id: req.params.id });
    if (!rating) return res.status(404).json({ message: "Rating not found" });
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const updatedRating = await Rating.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedRating)
      return res.status(404).json({ message: "Rating not found" });
    res.status(200).json(updatedRating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRating = async (req, res) => {
  try {
    const deletedRating = await Rating.findByIdAndDelete(req.params.id);
    if (!deletedRating)
      return res.status(404).json({ message: "Rating not found" });
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
