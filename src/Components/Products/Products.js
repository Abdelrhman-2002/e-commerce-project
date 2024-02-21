import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoShuffle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      // .get("https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D")
      .then((res) => {
        setData(res.data);
        // console.log(res.data.data.products.edges);
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

                <p>{product.rating.rate}</p>
              </div>
              {hoveredProductId === product.id && (
                <div className="productHover">
                  <div className="productHoverButtons">
                    <button>
                      <IoShuffle />{" "}
                    </button>
                    <button>
                      <FaSearchPlus />{" "}
                    </button>
                    <button>
                      <FaRegHeart />{" "}
                    </button>
                  </div>
                  <button>
                    <Link to={`${product.id}`}>ShowMore</Link>
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
