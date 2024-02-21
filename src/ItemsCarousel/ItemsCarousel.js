import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoShuffle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper/modules";
import "./ItemsCarousel.css";
import "../Components/Products/products.css";

const ItemsCarousel = () => {
  const [data, setData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

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
      <div className="ItemsCarouselHeader">
        <h1>
          Featured Products
        </h1>
        <hr />
      </div>
      <div className="ItemsCarouselContainer">
        <Swiper
          loop={true}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          infinite={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
          
          className="mySwiper"
        >
          {data
            .filter((product) => product.id % 2 === 0)
            .map((product) => (
              <SwiperSlide
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default ItemsCarousel;
