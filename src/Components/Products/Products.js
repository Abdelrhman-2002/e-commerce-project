import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { IoShuffle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import StarRating from "../Rating/StarRating.js";
import { useDispatch } from "react-redux";
import { cartSlice } from "../Redux/CartSlice.js";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <Fragment>
      <div className="productsContainer">
        <h1>Our Products</h1>
        <hr />
        <div className="products">
          {data.map((product) => (
            <div
              key={product.id}
              className="product"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img alt="" src={product.image} />
              <div className="productData">
                <h3 style={{ textAlign: "center", fontWeight: "900" }}>
                  {product.title}
                </h3>
                <div className="productPrice">
                  <p
                    style={{
                      color: "red",
                      fontSize: "18px",
                      fontWeight: "900"
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </p>
                  <p>
                    <del>
                      $
                      {(
                        product.price + Math.round(product.price / 12.5)
                      ).toFixed(2)}
                    </del>
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "5px" }}
                  className="productRating"
                >
                  <StarRating rating={Math.round(product.rating.rate)} />
                  <p>({product.rating.count})</p>
                </div>
              </div>
              {hoveredProductId === product.id && (
                <div className="productHover">
                  <div className="productHoverButtons">
                    <button>
                      <IoShuffle />
                    </button>
                    <button>
                      <Link
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                        to={`${product.id}`}
                      >
                        {" "}
                        <FaSearchPlus />
                      </Link>
                    </button>
                    <button>
                      <FaRegHeart />
                    </button>
                  </div>
                  <button
                    className="showbtn"
                    onClick={() =>
                      dispatch(cartSlice.actions.addToCart(product))
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
