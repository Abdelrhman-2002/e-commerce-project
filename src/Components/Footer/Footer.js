import React, { Fragment } from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiMobile4 } from "react-icons/ci";
const images = [
  require("../../Logos/facebook.png"),
  require("../../Logos/instagram.png"),
  require("../../Logos/twitter.png"),
  require("../../Logos/youtube.png"),
  require("../../Logos/google-plus.png")
];
const methods = [
    require("../../Logos/visa.png"),
    require("../../Logos/paypal.png"),
    require("../../Logos/discover.png"),
    require("../../Logos/american-express.png"),
    require("../../Logos/mastercard.png"),
  ];
export const Footer = () => {
  const handleClick = () => {
    window.location.href = "/home";
  };

  return (
    <Fragment>
      <div className="mainFooter">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <p>
            <IoLocationOutline /> 123 Street, Old Trafford, NewYork, USA
          </p>
          <a href="mailto:info@sitename.com">
            {" "}
            <SlEnvolopeLetter /> info@sitename.com
          </a>
          <p>
            <CiMobile4 /> 123-456-789
          </p>
          <div className="socialMedia">
            <div>
              <img
                style={{ width: "32px", height: "32px" }}
                alt=""
                src={images[0]}
              />
            </div>
            <div>
              <img
                style={{ width: "32px", height: "32px" }}
                alt=""
                src={images[1]}
              />
            </div>
            <div>
              <img
                style={{ width: "32px", height: "32px" }}
                alt=""
                src={images[2]}
              />
            </div>
            <div>
              <img
                style={{ width: "32px", height: "32px" }}
                alt=""
                src={images[3]}
              />
            </div>
            <div>
              <img
                style={{ width: "32px", height: "32px" }}
                alt=""
                src={images[4]}
              />
            </div>
          </div>
        </div>

        <div className="usefulLinks">
          <h2>Useful Links</h2>
          <a href="/home">FAQ</a>
          <a href="/home">About Us</a>
          <a href="/home">Location</a>
          <a href="/home">Affiliates</a>
          <a href="/home">Contact</a>
        </div>

        <div className="myAccount">
          <h2>My Account</h2>
          <a href="/home">My Account</a>
          <a href="/home">Discount</a>
          <a href="/home">Returns</a>
          <a href="/home">Orders History</a>
          <a href="/home">Order Tracking</a>
        </div>

        <div className="Newsletter">
          <h2>Subscribe Our Newsletter</h2>
          <p>
            If you want to get an email from us every time we have a new special
            offer, then sign up here!
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter Email Address" />
            <button onClick={handleClick} className="image-button">
              <SlEnvolopeLetter color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="minorFooter">
        <p>© 2020 All Rights Reserved by Abdelrhman</p>
       <div className="methods">
            <div className="method"><img alt="" src={methods[0]}/></div>
            <div className="method"><img alt="" src={methods[1]}/></div>
            <div className="method"><img alt="" src={methods[2]}/></div>
            <div className="method"><img alt="" src={methods[3]}/></div>
            <div className="method"><img alt="" src={methods[4]}/></div>
       </div>
      </div>
    </Fragment>
  );
};
