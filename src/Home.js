import React from "react";
import "./Home.css";
import amazon from "./prime.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazon} />
        <div className="home__row"></div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
