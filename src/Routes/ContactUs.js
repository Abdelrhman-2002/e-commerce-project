import React from "react";
import "../Styles/Contact.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="form">
        <div className="flex">
          <label htmlFor="firstName">
            <input
              className="input"
              type="text"
              id="firstName"
              placeholder=""
              required
            />
            <span>First Name</span>
          </label>

          <label htmlFor="lastName">
            <input
              className="input"
              type="text"
              id="lastName"
              placeholder=""
              required
            />
            <span>Last Name</span>
          </label>
        </div>

        <label htmlFor="email">
          <input
            className="input"
            type="email"
            id="email"
            placeholder=""
            required
          />
          <span>Email</span>
        </label>

        <label htmlFor="contactNumber">
          <input
            className="input"
            type="tel"
            id="contactNumber"
            placeholder=""
            required
          />
          <span>Contact Number</span>
        </label>

        <label htmlFor="message">
          <textarea
            className="input01"
            id="message"
            placeholder=""
            rows="3"
            required
          ></textarea>
          <span>Message</span>
        </label>

        <button href="#" className="fancy">
          <span className="top-key"></span>
          <span className="text">Submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
