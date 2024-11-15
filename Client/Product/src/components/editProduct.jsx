import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct({ products, onUpdateProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({ name: '', description: '', price: '', image: null });

  useEffect(() => {
    const product = products.find((p) => p._id === id);
    if (product) {
      setProductData({ ...product });
    }
  }, [id, products]);

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
    if (productData.image) formData.append('image', productData.image);

    try {
      const response = await axios.put(`http://localhost:3000/api/products/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onUpdateProduct(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input type="text" name="name" value={productData.name} onChange={handleChange} placeholder="Product Name" required />
      <textarea name="description" value={productData.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="price" value={productData.price} onChange={handleChange} placeholder="Price" required />
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Update Product</button>
    </form>
  );
}

export default EditProduct;
