import React from "react";
import { Link } from "react-router-dom";

import "./productlist.css";

const ProductList = ({ category }) => {
  
  return (
    <div>
      <section className="all-products">
        {category.products.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/${category.id}/products/${product.id}`}>
              <div key={product.id}>
                {product.name} - ${product.price}
                <button>add to cart</button>
              </div>
            </Link>
          
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
