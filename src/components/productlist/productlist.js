import React from "react";
import { Link } from "react-router-dom";
import "./productlist.css";
import image from '../../assets/tonic.svg'

const ProductList = ({ category }) => {
  return (
    <div>
      <h2 className="category-title">{category.name}</h2>
      <section className="product-list">
        {category.products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/${category.id}/products/${product.id}`}>
              <img
                src={image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="view-button">View</button>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;

