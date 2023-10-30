import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import cart from '../../assets/cart.svg'
import home from '../../assets/home.svg'


function Navbar() {
  return (
    <div className="nav">
    <div>
      <Link to="/">
        <section  className="h-cover">
        <img className="home" src={home} alt="home" />
        <p>T & T</p>
        </section>
        
        
      </Link>
    </div>
    <span className="cart">
      <Link to="/cart">
        <img className="image" src={cart} alt="cart" />
      </Link>
    </span>
  </div>
  );
}

export default Navbar;
