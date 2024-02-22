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
import StarRating from "..//Components/Rating/StarRating";

const ItemsCarousel = () => {
  const [data, setData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isThree, setIsThree] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      const handleResize = (e) => {
            if (e.currentTarget.innerWidth < 1147) {
              setIsThree(true);
            } else {
              setIsThree(false);
            }
            if (e.currentTarget.innerWidth < 687) {
              setIsTwo(true);
            } else {
              setIsTwo(false);
            }
          };
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
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
          slidesPerView={isThree&&!isTwo ? 3 : (isTwo ? 1 : 5)}

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

                  <div
                  style={{ display: "flex", gap: "5px" }}
                  className="productRating"
                >
                  <StarRating rating={Math.round(product.rating.rate)} />
                  <p>({product.rating.count})</p>
                </div>                </div>
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
                    <button className="showbtn">
                    <span><Link to={`${product.id}`}>ShowMore</Link></span>
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
