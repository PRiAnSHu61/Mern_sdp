import React from 'react';
import { Link } from 'react-router-dom';

function GetProduct({ products, onDeleteProduct }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.image && <img src={product.image} alt={product.name} width="100" />}

          <div className="reviews">
            <h4>Reviews:</h4>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div key={review._id} className="review">
                  <p>Rating: {review.rating}/5</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>

          <button onClick={() => onDeleteProduct(product._id)}>Delete Product</button>
          <Link to={`/edit-product/${product._id}`}>Edit Product</Link>
          <Link to={`/add-review/${product._id}`}>Add Review</Link>
        </div>
      ))}
    </div>
  );
}

export default GetProduct;
