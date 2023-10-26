import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../assets/tonic.svg';



const ProductDetail = ({ products, handleClick }) => {
  // const [name, size, price, description] = products;
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
      <h3>Size: {product.size}</h3>
      <h3>Price: ${product.price}</h3>
      <p>Description: {product.description}</p>
      <button onClick={()=>handleClick(product)} >Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
