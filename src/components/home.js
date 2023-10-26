import React from "react";
import data from "../assets/data";
import ProductList from "./productlist";


function HomePage() {
  const centerTextStyle = {
    textAlign: "center",
  };

  return (
    <div>
   
      <h1 style={centerTextStyle}>Baby and Mother Care Shop</h1>
      {data.categories.map((category) => (
        <ProductList key={category.id} category={category} />
      ))}
    </div>
  );
}

export default HomePage;
