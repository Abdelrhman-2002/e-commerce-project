import React from "react";
import "../Styles/About.css";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const AboutUs = () => {
  return (
    <div className="About">
      <div className="info">
        <div className="it">
          <div className="cir">
            <FaRegMap size={35} />
          </div>
          <h2>Address</h2>
          <p> 123 Street, Old Trafford, NewYork, USA</p>
        </div>
        <div className="it">
          <div className="cir">
            <MdOutlineMail size={35} />
          </div>
          <h2>Email Address</h2>
          <a href="mailto:info@sitename.com"> info@sitename.com</a>
        </div>
        <div className="it">
          <div className="cir">
            <HiOutlineDevicePhoneMobile size={35} />
          </div>
          <h2>Phone</h2>
          <p>+123-456-789</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.26815664392!2d34.45654475727601!3d31.501712483001576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2seg!4v1708628702287!5m2!1sen!2seg"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
