import React from "react";
import "./Furtblog.css";

import HeadingComponent from "../HeadingComponent/HeadingComponent";
import { Link } from "react-router-dom";
import frtimg1 from "../../assets/frtimg1.png";
import frtimg2 from "../../assets/frtimg2.png";
import frtimg3 from "../../assets/frtimg3.png";
import frtimg4 from "../../assets/frtimg4.png";
import frtimg5 from "../../assets/frtimg5.png";

function Furtblog() {
  // Define an array of blog items
  const blogItems = [
    {
      imgSrc: frtimg1,
      heading: "What if your drone fails",
      subheading: "Emergency parachute recovery system",
      date: "Mar 18, 2024",
      link: "/all-blog",
    },
    {
      imgSrc: frtimg2,
      heading: "Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy",
      date: "Mar 18, 2024",
    },
    {
      imgSrc: frtimg3,
      heading: "Aethron Aerospace Achieves a Milestone: Drones to Rescue Lives in Waterlogged Areas!",
      date: "Mar 17, 2024",
    },
    {
      imgSrc: frtimg4,
      heading: "Drone to Conduct Search Operations in Ocean Waves:",
      date: "Mar 18, 2024",
    },
    {
      imgSrc: frtimg5,
      heading: "Your Design Partner in Defence: design and development for aerospace, uav , defence sector",
      date: "Mar 18, 2024",
    },
  ];

  return (
    <>
      <div className="furtblog">
        <div className="feature_head">
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex">
                <HeadingComponent heading="Featured Blogs" />
                <a
                  className="btn bordermaincolor"
                  style={{
                    height: "40px",
                    width: "120px",
                    marginLeft: "170px",
                    
                  }}
                >
                  ALL BLOG <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
              <div className="mt-4 col-sm-6">
                <img src={blogItems[0].imgSrc} alt="" />
                <Link
                  className="btn blog_btn px-3 backgroundcolormain"
                   
                  to={blogItems[0].link}
                >
                  Blog
                </Link>
              </div>

              <div className="frt_heading2 mt-4 px-2">
                <h4 className="maincolor" >{blogItems[0].heading}</h4>
                {blogItems[0].subheading && (
                  <h6 className="maincolor">{blogItems[0].subheading}</h6>
                )}
                <h6>{blogItems[0].date}</h6>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="d-flex">
                <h3 className="fw-bold px-1">News</h3>
                <a className="btn frtbtn2 bordermaincolor" >
                  MORE NEWS <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
              <div className="mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {blogItems.slice(1).map((item, index) => (
                    <div className="col" key={index}>
                      <img
                        src={item.imgSrc}
                        className="card-img-top rounded-2"
                        alt="..."
                        style={{ height: "170px" }}
                      />
                      <div className="frt_txt mt-2 px-2">
                        <h6 className="card-text maincolor" >
                          {item.heading}
                        </h6>
                        <h6>{item.date}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join_team p-5">
        <div className="d-flex justify-content-center">
          <h6 className="maincolor fontfamilyPrimary" style={{fontSize:'36px'}} >Join The Team</h6>
          <div className="px-4 fw-bold fontfamilySecondary mt-3" style={{fontSize:'18px'}} >
            Interested in an exciting opportunity to design and build future air
            solutions? <a className="maincolor">View open roles</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Furtblog;
