import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";
import StarRating from "../Rating/StarRating";
import { useDispatch } from 'react-redux'
import { cartSlice } from '../Redux/CartSlice'
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const dispatch=useDispatch()

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="singleProductContainer">
        <div key={data.id} className="singleProduct">
          <div className="singleProductImage">
            <img alt="" src={data.image} />
          </div>
          <div className="singleProductData">
            <h1>{data.title}</h1>
            <div className="singleProductPrice">
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                  fontWeight: "900"
                }}
              >
                ${data.price.toFixed(2)}
              </p>
              <p>
                <del>
                  ${(data.price + Math.round(data.price / 12.5)).toFixed(2)}
                </del>
              </p>
            </div>
            size:
            <div className="size">
              <label id="topleft" className="lol">
                <input name="my-radio-button" type="radio" value="topleft" />
                <label id="tl">small</label>
                <div className="selected"></div>
              </label>
              &nbsp;
              <label id="topright" className="lol">
                <input name="my-radio-button" type="radio" value="topright" />
                <label id="tr">medium</label>
                <div className="selected"></div>
              </label>
              <br />
              <br />
              <label id="bottomleft" className="lol">
                <input name="my-radio-button" type="radio" value="bottomleft" />
                <label id="bl">large</label>
                <div className="selected"></div>
              </label>
              &nbsp;
              <label id="bottomright" className="lol">
                <input
                  name="my-radio-button"
                  type="radio"
                  value="bottomright"
                />
                <label id="br">X-large</label>
                <div className="selected"></div>
              </label>
            </div>
            <div>
              <div
                  style={{ display: "flex", gap: "5px" }}
                  className="productRating"
                >
                  <StarRating rating={Math.round(data.rating.rate)} />
                  <p>({data.rating.count})</p>
                </div>            </div>
            <p>{data.description}</p>
            <button className="CartBtn" onClick={()=>dispatch(cartSlice.actions.addToCart(data))}>
              <span className="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  className="cart"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p className="text">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
