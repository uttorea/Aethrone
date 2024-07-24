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
        <img src={homeBgImg} alt="" className="home_bgImg1 w-100" />
        <div
          className="home_main_containt"
          
        >
          <div className="carouselitem">
            <div className="home_heading text-white ">
              <p className="headingtext fontfamilyPrimary  mt-4 ms-md-0 ">
                AETHRONE
                <br />
                AEROSPACE
              </p>

              <p className="text-light ingenuity  ms-md-0">
                <span className=" ingenuityspan">Ingenuity</span>
                <span className="ingenuityspan">|</span>
                <span className="ingenuityspan">Dynamism</span>
                <span className="ingenuityspan">|</span>
                <span className="ingenuityspan">Perfection</span>
              </p>

              <div className="mt-5 d-flex Home-para-main">
                <div className="col-md-2 ms-0 ms-md-5 col-0 col-sm-1 "></div>
                <div className="col-sm-12 col-lg-7  whoWeare  " >
                  <HeadingComponent heading="Who We Are" />
                  <div
                    className="We-are-a-deep "
                    style={{ backgroundColor: "#0E0E0E" }}
                  >
                    <p
                      className="homepage-text"
                      style={{  letterSpacing: "1px",}}
                    >
                      We are a deep tech start-up  incubated from SIIC-IIT Kanpur
                    </p>
                    <p
                      className=" homepage-text"
                      style={{ letterSpacing: "1px",}}
                    >
                      We design, develop, manufacture and support critical
                      mission systems, platforms and components for the
                      Aerospace and Defence Sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Carousel />
          </div>
        </div>


      </div>
      <div>
          <div>
      <Plane />
          </div>
          <div>
      <Design  />
          </div>
          
          <div>
      <Products />
          </div>
          <div>
      <OwlcarouselComponent />
          </div>
          <div>

      <Furtblog />
          </div>
          <div>

      <Project />
          </div>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
