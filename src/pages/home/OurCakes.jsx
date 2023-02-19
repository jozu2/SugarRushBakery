import { useState } from "react";
import "./OurCakes.scss";
import { ourcakesData } from "./OurCakesData";

const OurCakes = () => {
  return (
    <div className="home-container">
      <h1 className="ourCakes">Our Cakes</h1>
      <div className="ourProducts-container">
        <div className="product-one-container">
          <img src={`${ourcakesData[0].img}`} />
          <div className="productName">{ourcakesData[0].title}</div>
          <div className="description">{ourcakesData[0].description}</div>
          <button>Explore</button>
        </div>

        <div className="product-two-container">
          <img src={`${ourcakesData[1].img}`} />
          <div className="productName">{ourcakesData[1].title}</div>
          <div className="description">{ourcakesData[1].description}</div>
          <button>Explore</button>
        </div>

        <div className="product-three-container">
          <img src={`${ourcakesData[2].img}`} />
          <div className="productName">{ourcakesData[2].title}</div>
          <div className="description">{ourcakesData[2].description}</div>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default OurCakes;
