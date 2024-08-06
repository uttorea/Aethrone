import React from "react";
import { Link } from "react-router-dom";
import "./Launch.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import launchbgimg from "../../assets/launchbgimg.png";
import LauncherSystem from "../LauncherSystem/LauncherSystem";
import LauncherRecovery from "../LauncherRecoverySystem/LauncherRecovery";
import Project from "../Project/Project";
import Footer from "../../Components/Footer/Footer";
const Launch = () => {
  return (
    <>
      <div className="launch_container">
        <img src={launchbgimg} alt="" className="launch-img1 w-100" />
        <div className="container">
          <div className="launch_content text-light">
            <h2 className="launch_content-name">
              Launch And <br /> Recovery/Delivery
            </h2>
            <div className="mt-5">
              <HeadingComponent heading="What We Do"/>
              <h3 className="lrdimg_para1 mt-md-3 mt-2 px-2"></h3>
              <div className="lrdimg_para2 p-md-5 p-2   rounded mt-3 me-2 me-md-0">
                <p className="fontsecondry letterSpacing px-md-4 px-2">
                  We design and manufacture end-to-end solutions for launch and
                  recovery/delivery of UAVs and Lighter Than Air
                  <br /> Systems.
                </p>
                <p className="fontsecondry letterSpacing px-md-4 px-2">
                  Our products are aerospace/military grade, having undergone
                  extensive testing and qualification for environmental
                  <br /> conditions, operational vibrations, shock, max
                  operational loads and require minimum maintenance with long
                  shelf life. 
                </p>
              </div>
            </div>
            <div className="launch_btn mt-3 mt-md-5">
              <Link
                className="btn btn-light  px-md-5 px-1 ms-0 ms-md-4 launch_btn1 fontfamilySecondary maincolor"
                to="/delivery-launcher-system"
              >
                {" "}
                Launcher System <i className="bi bi-arrow-down"></i>
              </Link>
              <Link
                className="btn btn-light px-md-5 px-1 mx-md-5 mx-1 launch_btn1 maincolor fontfamilySecondary"
                to="/launch-recovery-system"
              >
                {" "}
                Parachute Recovery Systems <i className="bi bi-arrow-down"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LauncherSystem />
      <LauncherRecovery />
      <div className="mt-5 mt-md-0">

      <Project />
      </div>
      <Footer />
    </>
  );
};

export default Launch;
