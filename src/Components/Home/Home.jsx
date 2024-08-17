import React from "react";
import { Helmet } from "react-helmet"; // Import react-helmet for SEO
import "./Home.css";
import homeBgImg from "../../assets/home1.png";
import Carousel from "../Carousel/Carousel";
import Plane from "../../Components/ShowingPlane/Plane";
import Design from "../../Components/Design_development/Design";
import Products from "../Products/Products";
import OwlcarouselComponent from "../../Components/OwlCarousel/OwlcarouselComponent";
import Furtblog from "../../Components/Feature-Blog/Furtblog";
import Project from "../../Components/Project/Project";
import Discover from '../../Components/Discover/Discover';
import Footer from "../../Components/Footer/Footer";
import HeadingComponent from "../HeadingComponent/HeadingComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Title and Meta Tags for SEO */}
        <title>Aethrone Aerospace</title>
        <meta 
          name="description" 
          content="Aethrone Aerospace is a deep tech start-up incubated from SIIC-IIT Kanpur. We specialize in designing, developing, manufacturing, and supporting critical mission systems for the Aerospace and Defence sectors." 
        />
        <meta 
          name="keywords" 
          content="Aerospace, Defence, Aerospace Company in Pune, Design & Development, Precision Manufacturing, Aerospace Systems, Aethrone Aerospace" 
        />
        <meta name="author" content="Aethrone Aerospace" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.aethroneaerospace.com" />

        {/* Open Graph (OG) Tags for Social Sharing */}
        <meta property="og:title" content="Aethrone Aerospace - Best Aerospace Company in Pune" />
        <meta 
          property="og:description" 
          content="We design, develop, manufacture, and support critical mission systems for Aerospace and Defence. Aethrone Aerospace is incubated from SIIC-IIT Kanpur." 
        />
        <meta property="og:url" content="https://www.aethroneaerospace.com" />
        <meta property="og:image" content={homeBgImg} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aethrone Aerospace - Best Aerospace Company in Pune" />
        <meta 
          name="twitter:description" 
          content="We design, develop, manufacture, and support critical mission systems for Aerospace and Defence. Aethrone Aerospace is incubated from SIIC-IIT Kanpur." 
        />
        <meta name="twitter:image" content={homeBgImg} />
      </Helmet>

      <div className="home_page position-relative">
        <img src={homeBgImg} alt="Aethrone Aerospace Home Background" className="home_bgImg1 w-100" />
        <div className="home_main_containt">
          <div className="carouselitem">
            <div className="home_heading text-white ">
              <p className="headingtext  fontfamilyPrimary  mt-4 ms-md-0 ">
                AETHRONE
                <br />
                AEROSPACE
              </p>
              <p className="text-light ingenuity fontfamilySecondary ms-md-0">
                <span className=" ingenuityspan">Ingenuity</span>
                <span className="ingenuityspan">|</span>
                <span className="ingenuityspan">Dynamism</span>
                <span className="ingenuityspan">|</span>
                <span className="ingenuityspan">Perfection</span>
              </p>
              <div className="mt-5 d-flex Home-para-main">
                <div className="col-md-1 ms-0 ms-md-5 col-0 col-sm-1 "></div>
                <div className="col-sm-12 col-lg-8 whoWeare">
                  <HeadingComponent heading="Who We Are" />
                  <div className="We-are-a-deep fontfamilySecondary rounded">
                    <p className="homepage-text" style={{ letterSpacing: "1px" }}>
                      We are a deep tech start-up incubated from SIIC-IIT Kanpur.
                    </p>
                    <p className="homepage-text" style={{ letterSpacing: "1px" }}>
                      We design, develop, manufacture and support critical mission systems, platforms, and components for the Aerospace and Defence Sector.
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
        <Plane />
        <Design />
        <div className="discover-section">
          <Discover />
        </div>
        <div className="product_home">
          <Products />
        </div>
        <OwlcarouselComponent />
        <Furtblog />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
