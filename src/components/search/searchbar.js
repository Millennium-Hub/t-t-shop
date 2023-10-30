import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import data from "../../assets/data";
import './search.css'

function Searchbar() {
  const [searchIterm, setSearchIterm] = useState("");


  

  const filteredProducts = data.categories.flatMap((category) => {
    return category.products.filter((product) =>
      product.name.toLowerCase().includes(searchIterm.toLowerCase())
    );
  });

  return (
    <div>
      <section>
        <input
          className="input-field"
          value={searchIterm}
          onChange={(e) => setSearchIterm(e.target.value)}
          type="text"
          placeholder="Search Item"
        />
      </section>

      <section className="result">
        {searchIterm && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/${product.cat}/products/${product.id}`}>
              <p className="text">
                {product.name} - ${product.price}
              </p>
              </Link>
            </div>
          ))
        ) : null}
      </section>
    </div>
  );
}

export default Searchbar;
