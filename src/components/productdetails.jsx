import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../assets/tonic.svg';


const ProductDetail = ({ products }) => {
  const { categoryId, productId } = useParams();
  const category = products.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div>Category not found.</div>;
  }

  const product = category.products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <img src={img} alt="img"/>  
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;

