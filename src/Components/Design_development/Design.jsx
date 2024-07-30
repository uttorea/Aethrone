import React from "react";
import "./Design.css";
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import Button from "../Button/Button";
import DD1 from "../../assets/DD1.png";
import DD2 from "../../assets/DD2.png";
import DDcardImg1 from "../../assets/DDcardImg1.png";
import DDcardImg2 from "../../assets/DDcardImg2.png";
import DDcardImg3 from "../../assets/DDcardImg3.png";
import DDcardImg4 from "../../assets/DDcardImg4.png";
import DDcardImg5 from "../../assets/DDcardImg5.png";
import DDcardImg6 from "../../assets/DDcardImg6.png";


const cardData = [
  { img: DDcardImg1, title: "Computer Aided Designer" },
  { img: DDcardImg2, title: "Computational Fluid Dynamics" },
  { img: DDcardImg3, title: "Multi Disciplinary Optimization" },
  { img: DDcardImg4, title: "Composite Matrix Design" },
  { img: DDcardImg5, title: "Fluid Structure Interaction" },
  { img: DDcardImg6, title: "Noise-Vibrations-Harshness" },
];

function Design() {
  return (
    <>
      <div className="design_head">
        <div className="designimg d-flex">
          <img src={DD1} alt="" className="ddimg1" />
          <img src={DD2} alt="" className="ddimg2" />
        </div>

        <div className="container-lg container-fluid">
          <div className="dd_body">
            <div className="rounded p-md-5 p-1 pt-3  text-dark bg-opacity-75 design_main_head" >
              <div className="row">
                <div className="col-sm-5 px-3">
                <div className="text-white mt-3">
                  <Heading heading="Design & Development" subheading="From concept to product to certification"/>
                </div>
                  
                  <div className="dd_para mt-3 mt-md-5 fontsecondry fontweight">
                    <p className=" disingtext px-3">
                      Our comprehensive design and simulation services include conceptual design,
                      feasibility studies, new product development, product upgrades,
                      legacy product maintenance, and smart testing rig development.
                    </p>
                    <p className=" disingtext px-3">
                      We also provide product qualification, integration, testing, certification, IP transfer, and long-term support.
                    </p>
                  </div>
                  <div className="mt-3 mt-md-5 ms-3">
                  <Button text="Discover Design & Development"/>
                  </div>
                 
                </div>
                <div className="col-sm-7 mt-4 mt-md-0">
                  <div className="row row-cols-3 row-cols-md-3 ms-1 ms-md-0 ">
                    {cardData.map((card, index) => (
                      <div className="col p-md-3 p-1 " key={index}>
                        <div className=" bg-transparent border-0 w-100  cardheight">
                          <img src={card.img} className="card-img-top  " alt={card.title} />
                          <h6 className="text-light text-center mt-2 fontsecondry ddimg_heading fw-bold">
                            {card.title}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
