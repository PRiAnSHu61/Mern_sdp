import React, { useState } from 'react';
import axios from 'axios';

function AddReview({ productId }) {
  const [reviewData, setReviewData] = useState({ rating: '', comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/products/${productId}/reviews`, reviewData);
      // Optionally refresh or update reviews state in the parent component
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" onChange={handleChange} required />
      <textarea name="comment" placeholder="Comment" onChange={handleChange} required />
      <button type="submit">Add Review</button>
    </form>
  );
}

export default AddReview;
