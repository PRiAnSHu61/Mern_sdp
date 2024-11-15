import React, { useState } from 'react';
import axios from 'axios';

function AddProduct({ onAddProduct }) {
  const [productData, setProductData] = useState({ name: '', description: '', price: '', image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('image', productData.image);

    try {
      const response = await axios.post('http://localhost:3000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onAddProduct(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleFileChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
