const Item = require("../models/flight");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    // Ensure the flight_id is unique
    const existingItem = await Item.findOne({ flight_id: req.body.flight_id });
    if (existingItem) {
      return res.status(400).json({ message: "Flight ID must be unique" });
    }

    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    // Find and update based on flight_id
    const updatedItem = await Item.findOneAndUpdate(
      { flight_id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const flightId = parseInt(req.params.id); // Ensure it is a number
    const deletedItem = await Item.findOneAndDelete({ flight_id: flightId });

    if (!deletedItem) return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

