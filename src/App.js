
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import ProductDetail from './components/productdetails';
import data from './assets/data';
import Cart from './components/Cart';
import { useState } from 'react';

import Navbar from './components/navbar';

function App () {
 
  const [cartItems , setCartItems] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item)=>{
		let isPresent = false;
		cartItems.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCartItems([...cartItems, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cartItems.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cartItems;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCartItems([...tempArr])
	}


  return (
    <div>
      <Navbar />
      {
			warning && <div >Item is already added to your cart</div>
		  }
      <Routes>
       
        <Route path="/" element={<HomePage />} />

        <Route
          path="/:categoryId/products/:productId"
          element={<ProductDetail products={data.categories} handleClick={handleClick}/>}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCart={setCartItems} handleChange={handleChange}/>}/>
      </Routes>
    </div>
  );
}

export default App;
