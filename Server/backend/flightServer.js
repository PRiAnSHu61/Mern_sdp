const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const flightRoute = require("./routes/flightRoute");

dotenv.config();

const app = express();


app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error.message));


app.use("/api/flight", flightRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});