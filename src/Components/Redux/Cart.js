import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="cartContainer">
        <div className="cart">
          <h1>Your Cart</h1>
          <div className="idk">
            <p>product</p>
            <p>price</p>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="cartElements">
            {cart.map((element) => (
              <div key={element.id} className="cartElement">
                <div className="cartElementData">
                  <img alt="" src={element.image} />
                  <p>{element.title}</p>
                </div>
                <div className="zh2t">
                <button className="deleteItem">
                <RiDeleteBin6Line size={20}/>
                </button>
                <p>${element.price}</p>
                </div>
              </div>
            ))}
          </div>
          <hr style={{ width: "100%" }} />
          <div className="check">
            <button class="cta">
              <span class="hover-underline-animation"> Check Out </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>

            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
      <ItemsCarousel />
    </>
  );
};

export default Cart;
