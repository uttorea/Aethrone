import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import tubeLauncher from "../../assets/tubeLauncher.png";
import tubeLauncher1 from "../../assets/Tubelauncher1.png";
import tubeLauncher2 from "../../assets/Tubelauncher2.png";
import './TubeLauncher.css'

gsap.registerPlugin(ScrollTrigger);

function TubeLauncher() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery1",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock1",
        animation: animation,
        scrub: true,
        
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <React.Fragment>
        <div className="container p-0">

        <HeadingComponent
            heading="Tube Launcher - FBM 10"
            subheading="Specification"
            />
            </div>
      <Box className="gallery1 container pt-0" sx={{ display: "flex",}}>
        <Box
          className="leftblock"
          sx={{
            marginLeft: "auto",
            "& .details": {
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40vw",
              marginLeft: "auto",
              color: "#000",
              fontSize: "3rem",
              fontWeight: 900,
            },
          }}
        >
          
          <Box sx={{ height: "100vh" }}>
            <div className="buggigmain  d-flex gap-2 gap-md-5 p-0">
              <div className="  mt-md-0">
                <p className="fontsecondry">
                This Custom Off The Shelf Launcher can be used to launch upto 10
                kgs of Foldable Wing UAVs
                </p>
                <div className="d-flex gap-2 gap-md-5">
                  <div className="mt-2">
                    <table className="table border fontsecondry">
                      <tbody>
                        {[
                         {
                          description: "Maximum Aircraft Weight",
                          value: "10 kgs",
                        },
                        { description: "Corresponding Max Velocity", value: "35 m/s" },
                        { description: "G load on aircraft", value: "20G" },
                        { description: "Launch Angle", value: "15 - 35 Deg" },
                        { description: "Operating Temperature", value: "-10 to +50 Deg" },
                        ].map((spec, index) => (
                          <tr key={index}>
                            <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: spec.description,
                                }}
                              />
                            </td>
                            <td className="value-cell px-1 px-md-5 py-1 py-md-3">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          <Box sx={{}}>
            <div className="bungeenumber text-center ">
              <div className="bungeenumbermain">
                <h1 className="maincolor numberbungee fontfamilyPrimary">
                  1000
                </h1>
                <div className="fontfamilySecondary fontsecondry">
                Number of Launches [Pneumatic]
                </div>
              </div>
            </div>
          </Box>

          <Box sx={{ height: "100vh" }}>
            <div className="">
              <h1 className="mt-1 mt-md-5">Features</h1>
              <ul className="mt-0 mt-md-3 ulclassbungee fontfamilySecondary fontweight fontsecondry ">
              <li>
                Configurable Tube for Various Diameter of UAVs upto 210 mm ID
              </li>
              <li>Man Portable with cammo bag</li>
              <li>Reusable System with Pyro/Pneumatic Launch Mechanism</li>
              <li>Recoil reduction elastomers</li>
              <li>Sensor to Shooter Integration Capable</li>
              <li>ATWAD TM system for foldable propellers of UAV</li>
              </ul>
              <div className="maincolor  fontfamilySecondary fw-bold fontsecondry tube-launcher">
            Tube Launcher can be used to launch upto 10 kgs of Foldable Wing UAVs
            </div>
            <div className="mt-1 mt-md-3 fontfamilySecondary fontsecondry  Sensor-to-shooter">
            Sensor-to-shooter network can operate and intertwine with allied capabilities
            </div>
              
            </div>
          </Box>
        </Box>
        <Box
          className="rightblock1"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box className='rightblockcontainer'
            sx={{
             
              position: "relative",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "80%",
                "& img": {
                  height: "100%",
                  width: "100%",
                },
              },
            }}
          >
            <Box className="photo">
              <img src={tubeLauncher} alt="img-1" />
            </Box>
            <Box className="photo">
              <img src={tubeLauncher1} alt="img-2" />
            </Box>
            <Box className="photo">
              <img src={tubeLauncher2} alt="img-3" />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default TubeLauncher;
