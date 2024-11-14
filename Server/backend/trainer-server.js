const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const trainerRoutes = require('./routes/trainerRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error.', error));

app.use('/api/trainer', trainerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
