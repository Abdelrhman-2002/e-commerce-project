import React, { Fragment } from "react";
import "./Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <Fragment>
      <div class="container">
        <div class="item">
          <TbTruckDelivery size={40} color="red" />
          <div className="icon-data">
            <h3>Free Delivery</h3>
            <p>Worldwide</p>
          </div>
        </div>
        <div class="item">
          <RiRefund2Line size={40} color="red" />
          <div className="icon-data">
            <h3>Money Returns</h3>
            <p>30 Days money return</p>
          </div>
        </div>
        <div class="item">
          <RiCustomerService2Fill size={40} color="red" />
          <div className="icon-data">
            <h3>27/4 Online Support</h3>
            <p>Customer Support</p>
          </div>
        </div>
        <div class="item">
          <RiSecurePaymentFill size={40} color="red" />
          <div className="icon-data">
            <h3>Payment Security</h3>
            <p>Safe Payment</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
