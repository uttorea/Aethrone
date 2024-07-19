import React from "react";
import { Link } from "react-router-dom";
import "./Launch.css";
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
            <h1 className="launch_content-name">
              Launch And <br /> Recovery/Delivery
            </h1>
            <div className="mt-5">
              <h3 className="lrdimg_para1 mt-md-3 mt-5 px-2">What We Do</h3>
              <div className="lrdimg_para2 p-md-5 p-2  bg-black opacity-75 rounded mt-3 me-2 me-md-0">
                <p className="lrdimg_para2 px-md-4 px-2">
                  We design and manufacture end-to-end solutions for launch and
                  recovery/delivery of UAVs and Lighter Than Air
                  <br /> Systems.
                </p>
                <p className="lrdimg_para2 px-md-4 px-2">
                  Our products are aerospace/military grade, having undergone
                  extensive testing and qualification for environmental
                  <br /> conditions, operational vibrations, shock, max
                  operational loads and require minimum maintenance with long
                  shelf life. 
                </p>
              </div>
            </div>
            <div className="launch_btn mt-5">
              <Link
                className="btn btn-light border-2 border-primary px-md-5 px-1 ms-4 ms-md-0 launch_btn1"
                to="/delivery-launcher-system"
              >
                {" "}
                Launcher System <i className="bi bi-arrow-right"></i>
              </Link>
              <Link
                className="btn btn-light border-2 border-primary px-md-5 px-1 mx-md-5 mx-1 launch_btn1"
                to="/launch-recovery-system"
              >
                {" "}
                Parachute Recovery Systems <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LauncherSystem />
      <LauncherRecovery />
      <Project />
      <Footer />
    </>
  );
};

export default Launch;
