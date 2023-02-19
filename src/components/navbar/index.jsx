import "./style.scss";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";

const index = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-contents">
          <div className="start">
            <button className="cart-logo">order now</button>
          </div>
          <div className="center">
            <div className="logo">
              <span className="span-1">Sugar</span>{" "}
              <span className="span-2">Rush</span>{" "}
              <span className="span-3">Bakery</span>
            </div>
          </div>
          <div className="end">
            <FiShoppingCart />
            <button className="login-btn">Sign-In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
