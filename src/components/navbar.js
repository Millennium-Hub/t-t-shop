import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/cart"><li>cart</li></Link>
        <Link to="/"><li>Home</li></Link>
      </ul>
    </div>
  )
}

export default Navbar;
