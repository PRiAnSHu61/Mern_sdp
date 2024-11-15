const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    reviews: [reviewSchema]  // Embedding reviews as an array of subdocuments
});

module.exports = mongoose.model('Product', productSchema);
