import React, { Fragment } from "react";
import "../Styles/Home.css";
import Caros from "../Components/Carousel/Caros";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <Fragment>
      <main>
        <Caros/>
        <Services/>
      </main>
    </Fragment>
 );
};

export default Home;
