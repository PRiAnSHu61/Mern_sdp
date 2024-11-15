import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import AddProduct from '../../Product/src/components/addProduct';
import GetProduct from '../../Product/src/components/getProduct';
import EditProduct from '../../Product/src/components/editProduct';
import AddReview from '../../Product/src/components/addReview';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products data when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Product Management with Reviews</h1>
        <nav>
          <Link to="/">Product List</Link> | <Link to="/add-product">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetProduct products={products} onDeleteProduct={handleDeleteProduct} />} />
          <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />
          <Route path="/edit-product/:id" element={<EditProduct products={products} onUpdateProduct={handleUpdateProduct} />} />
          <Route path="/add-review/:productId" element={<AddReview products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
