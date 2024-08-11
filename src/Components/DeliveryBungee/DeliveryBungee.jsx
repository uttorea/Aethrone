import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import bungeeImg from "../../assets/bungeeImg.png";
import bungee from "../../assets/bungee.gif";
import bungee2 from "../../assets/BungeeImg2.png";
import Button from "../../Components/Button/Button";
import './DeliveryBungee.css'

gsap.registerPlugin(ScrollTrigger);

function DeliveryBungee() {
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
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
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
            heading="Bungee Catapult Launcher - YPJ 30"
            subheading="Specification"
            />
            </div>
      <Box className="gallery container pt-0" sx={{ display: "flex",}}>
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
                  This Custom Off The Shelf Launcher can be used to launch up to
                  30 kgs of Fixed Wing UAVs
                </p>
                <div className="d-flex gap-2 gap-md-5">
                  <div className="mt-2">
                    <table className="table border fontsecondry">
                      <tbody>
                        {[
                          {
                            description:
                              "Maximum Aircraft Weight <br/> Corresponding Max Velocity",
                            value: "30 kgs / 30m/s",
                          },
                          { description: "G load on aircraft", value: "5Gs" },
                          { description: "Launcher Weight", value: "72 kgs" },
                          { description: "Launch Angle", value: "15 - 35 Deg" },
                          { description: "Indigenous Content", value: "75 %" },
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
                  100
                </h1>
                <div className="fontfamilySecondary fontsecondry">
                  Launches per bungee
                </div>
              </div>
            </div>
          </Box>

          <Box sx={{ height: "100vh" }}>
            <div className="">
              <h1 className="mt-1 mt-md-5">Features</h1>
              <ul className="mt-0 mt-md-3 ulclassbungee fontfamilySecondary fontweight fontsecondry ">
                <li>
                  Configurable Trolley to accommodate wide variety of propeller
                  sizes
                </li>
                <li>Launch Speed Indicated</li>
                <li>Variable Angle of Launch</li>
                <li>Automated Launching Mechanism</li>
                <li>Ruggedized Portable Container</li>
                <li>Pusher/Tractor/Blending Wing Compatibility</li>
                <li>Built Capability for upto 1000 launches</li>
              </ul>
              <div className="maincolor mt-0 mt-md-5 fontfamilyPrimary See-bungee">
                See bungee catapult launcher in action{" "}
              </div>
              <div className="d-md-flex gap-md-4 gap-4 mt-md-3 mt-0 ">
                <div>
                  <Button text="Contact Us " />
                </div>
                <div className="mt-3 mt-md-0">
                  <Button
                    text="Download Brochure "
                    backgroundColor="white"
                    border="2px solid #3535DE"
                    color="#3535DE"
                  />
                </div>
              </div>
            </div>
          </Box>
        </Box>
        <Box
          className="rightblock"
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
              <img src={bungee} alt="img-1" />
            </Box>
            <Box className="photo">
              <img src={bungee2} alt="img-2" />
            </Box>
            <Box className="photo">
              <img src={bungeeImg} alt="img-3" />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default DeliveryBungee;
