import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../../assets/tonic.svg';
import './detail.css'



const ProductDetail = ({ products, handleClick }) => {

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
    <div className='detail'>
      <img src={img} alt="img"/>
      <div className='item-info'>
      <h2>{product.name}</h2>
      <h3>Size: {product.size}</h3>
      <h3>Price: ${product.price}</h3>
      <h4>Description: {product.description}</h4>
      <button className='btn' onClick={()=>handleClick(product)} >Add to Cart</button>
      </div>  
    </div>
  );
};

export default ProductDetail;
