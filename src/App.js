import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/home";
import ProductDetail from "./components/productdetail/productdetails";
import data from "./assets/data";
import Cart from "./components/cart/Cart";
import { useState } from "react";

import Navbar from "./components/nav/navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [warning, setWarning] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cartItems.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      } 
	  
    });

	if (isPresent) {
		setWarning(true);
		setTimeout(() => {
		  setWarning(false);
		}, 2000);

    return;
	  } else {
		setAlert(true);
		setTimeout(() => {
		  setAlert(false);
		}, 2000);
	  }

    setCartItems([...cartItems, item]);
  };
   

  const handleChange = (item, d) => {
    let ind = -1;
    cartItems.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cartItems;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCartItems([...tempArr]);
  };

  return (
	<div>

<Navbar />
    <div className="main-div">
      
      {warning && <div className="warn">Item is already added to your cart</div>}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/:categoryId/products/:productId"
          element={
            <ProductDetail
              products={data.categories}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCart={setCartItems}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
      {alert && <div className="added">Item added to your cart</div>}
    </div>
	</div>
  );
}

export default App;
