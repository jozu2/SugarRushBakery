import "./Footer.scss";

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footerText">
          <div className="ftAddress">
            {" "}
            <h1>Address</h1>Palat, Porac, Pampanga St.5
          </div>
          <div className="ftContact">
            <h1>Contact</h1>
            SugarRushBakery12@gmail.com <span>+63 967 522 6013</span>
          </div>
          <div className="ftFollowus">
            <h1>Follow Us</h1>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tiktok</li>
            </ul>
          </div>
        </div>
        <div className="footerMailingList">
          <div className="texttitle">
            <div className="title">
              Receive exclusive deals on Sugar Rush Bakery Join our mailing list
            </div>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Email Address" />
            </div>
            <div>
              <button>Subscribe Now!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
