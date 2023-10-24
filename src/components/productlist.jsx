import React from 'react';
import { Link } from 'react-router-dom';
import './productlist.css'

const ProductList = ({ category }) => {
  return (
    <div>
      {/* <h2>{category.name}</h2> */}
      <section className='all-products'>
        {category.products.map((product) => (
          <li key={product.id}>
            <Link to={`/${category.id}/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
