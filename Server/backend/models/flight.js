const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  flight_id: { type: Number, required: true },
  flight_name: { type: String, required: true },
  flight_source: { type: String, required: true },
  flight_destination: { type: String, required: true },
  flight_fare: { type: Number, required: true },
  flight_duration: { type: Number, required: true },
});

module.exports = mongoose.model("Airlines", FlightSchema);