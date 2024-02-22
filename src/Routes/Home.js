import React, { Fragment } from "react";
import "../Styles/Home.css";
import Caros from "../Components/Carousel/Caros";
import Services from "../Components/Services/Services";
import Products from "../Components/Products/Products";
import ItemsCarousel from "../Components/ItemsCarousel/ItemsCarousel";
import FeedBackCarousel from "../Components/FeedBackCarousel/FeedBackCarousel";

const Home = () => {
  return (
    <Fragment>
      <main>
        <Caros/>
        <Services/>
        <Products/>
        <ItemsCarousel/>
        <FeedBackCarousel/>
      </main>
    </Fragment>
 );
};

export default Home;
