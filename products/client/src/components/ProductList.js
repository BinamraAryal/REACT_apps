import React from 'react';
import './styles/productlist.css';

const ProductList = ({filteredProducts}) => {
  return (
    <div className="product-list-container">
      <h1 className ="product-list-title">Product List</h1>
      {filteredProducts.map((product) => ( //passing down props for state management
          <div key={product.id} className="product-item">
            <img src={product.picture} alt={product.name} />
            <div className="product-details">
              <p className="product-name">Name: {product.name}</p>
              <p className="product-description">Description: {product.description}</p>
              <p className="product-company">Company: {product.company}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-category">Category: {product.category}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
