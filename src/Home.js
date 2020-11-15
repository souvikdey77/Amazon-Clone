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
          <Product
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL.jpg"
            rating={4}
          />
          <Product
            title="Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram+16GB Optane/1TB HDD/Windows 10 Home/GTX 1650"
            price={121.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71QXJg8uOCL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage) - Get Rs 1,000 Amazon Pay cashback on prepaid orders. Limited Period offer"
            price={121.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="New Apple iPad (10.2-inch, Wi-Fi + Cellular, 128GB) - Space Grey (Latest Model, 8th Generation)"
            price={121.5}
            image="https://images-na.ssl-images-amazon.com/images/I/715-Tooq32L._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Lenovo GXD0T69863 Legion H300 Stereo Gaming Headset"
            price={121.5}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2B8Nwmi2VL._SL1480_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
            price={105.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71tt%2BZeOw%2BL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
