import React from "react";
import "./Home.css";
import amazon from "./amazon.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazon} />
        <div className="home__row">
          <Product />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
