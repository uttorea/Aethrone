import React from "react";
import "./Home.css";
import homeBgImg from "../../assets/home1.png";
import Carousel from "../Carousel/Carousel";
import Plane from "../../Components/ShowingPlane/Plane";
import Design from "../../Components/Design_development/Design";
import Products from "../Products/Products";
import OwlcarouselComponent from "../../Components/OwlCarousel/OwlcarouselComponent";
import Furtblog from "../../Components/Feature-Blog/Furtblog";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
const Home = () => {
  return (
    <div>
      <div className="home_page position-relative">
        <img src={homeBgImg} alt="" className="home_bgImg1 w-100  " />
        <div
          className="container "
          style={{
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "0",
          }}
        >
          <div className="carouselitem">
            <div className="home_heading text-white ">
              <p
                className="text-white "
                style={{
                  fontSize: "75px",
                  letterSpacing: "5px",
                  margin: "0",
                  fontFamily: "poor Richard",
                }}
              >
                AETHRONE
                <br />
                AEROSPACE
              </p>

              <p className="text-light fs-4 " style={{ fontSize: "27px" }}>
                <span className="mx-3  ">Ingenuity</span>
                <span className="mx-3">|</span>
                <span className="mx-3">Dynamism</span>
                <span className="mx-3">|</span>
                <span className="mx-3 ">Perfection</span>
              </p>

                <div className="mt-5 d-flex">
                <div className="col-2"></div>
              <div className=" col-7 " style={{marginLeft:"130px"}}>
                <HeadingComponent heading="Who We Are" />
                <div className="mt-4 p-5 fontfamilySecondary" style={{backgroundColor:'#0E0E0E', }}>
                  <p className="fontfamilySecondary font-weight-light" style={{fontSize:'18px',letterSpacing: '1px'}}>
                    We are a deep tech start-up incubated from SIIC-IIT Kanpur
                  </p>
                  <p className="fontfamilySecondary font-weight-light" style={{fontSize:'18px',letterSpacing: '1px'}}>

                    We design, develop, manufacture and support critical mission
                    systems, platforms and components for the Aerospace and
                    Defence Sector.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
      <Plane />
      <Design />
      <Products />
      <OwlcarouselComponent />
      <Furtblog />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
