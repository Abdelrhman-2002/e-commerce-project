import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./caros.css";
import add1 from "../../Images/add1.png";
import add2 from "../../Images/add2.jpeg.png";
import add3 from "../../Images/add3.png";
const Caros = () => {
  return (
    <div className="carouselContainer">
      <Carousel
        className="carousel"
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
        showIndicators={false}
      >
        <div className="first">
          <div className="data">
            <h1>Discover Our winter Collection</h1>
            <button className="c-button c-button--gooey">
              {" "}
              Show More
              <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </div>
          <div className="photo">
            <img alt="" src={add1} />
          </div>
        </div>
        <div className="second">
          <div className="data">
            <h1>Discounts up to 70%</h1>
            <button class="btn" type="button">
              <strong>Discover</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </div>
          <div className="photo">
            <img alt="" src={add2} />
          </div>
        </div>
        <div className="third">
          <div className="data">
            <h1>See our new kids Collection</h1>
            <button className="elbtn">See More</button>
          </div>
          <div className="photo">
            <img alt="" src={add3} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Caros;
