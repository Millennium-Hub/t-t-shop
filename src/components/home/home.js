import React from "react";
import data from "../../assets/data";
import ProductList from "../productlist/productlist";
import Searchbar from "../search/searchbar";
import './home.css';


function HomePage() {
  
  return (
    <div>
       <Searchbar />
       <div className="welcome-page">
       <h2 className="welcome">Welcome to T&T Mother Care Shop</h2>
       <h4 className="w-1">Mother's range of baby products</h4>
       </div>
      <h2 className="o-products">Our Products</h2>
      <div className="featured-items">{data.categories.map((category) => (
        <ProductList key={category.id} category={category} />
      ))}
      <section className="foter">T&T SHOP</section>
      </div>
    </div>
  );
}

export default HomePage;
