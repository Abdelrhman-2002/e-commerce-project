import React from "react";
import "./FeedBackCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation } from "swiper/modules";
import add1 from "../../Images/add1.png";
const FeedBackCarousel = () => {
  return (
    <div className="FeedBackCarouselContainer">
      <h1 style={{ fontSize: "40px" }}>Our Client Say!</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        infinite={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="feedback-carousel"
      >
        <SwiperSlide>
          <div className="cont" style={{ width: "80%", height: "200px" }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="userData">
              <img width={"60px"} height={"60px"} alt="" src={add1} />
              <div>
                <p style={{ fontSize: "18px" }}>
                  <b>Ahmed Mohamed</b>
                </p>
                <p style={{ color: "red" }}>Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont" style={{ width: "80%", height: "200px" }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="userData">
              <img width={"60px"} height={"60px"} alt="" src={add1} />
              <div>
                <p style={{ fontSize: "18px" }}>
                  <b>Ahmed Mohamed</b>
                </p>
                <p style={{ color: "red" }}>Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont" style={{ width: "80%", height: "200px" }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="userData">
              <img width={"60px"} height={"60px"} alt="" src={add1} />
              <div>
                <p style={{ fontSize: "18px" }}>
                  <b>Ahmed Mohamed</b>
                </p>
                <p style={{ color: "red" }}>Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeedBackCarousel;
