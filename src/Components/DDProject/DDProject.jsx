import React from "react";
import "./DDProject.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import ddprojectimg1 from "../../assets/ddprojectimg1.png";
import ddprojectimg2 from "../../assets/ddprojectimg2.png";
import ddprojectimg3 from "../../assets/ddprojectimg3.png";
import ddprojectimg4 from "../../assets/ddprojectimg4.png";
import ddprojectimg5 from "../../assets/ddprojectimg5.png";
import ddprojectimg6 from "../../assets/ddprojectimg6.png";
import ddprojectimg7 from "../../assets/ddprojectimg7.png";
import ddprojectimg8 from "../../assets/ddprojectimg8.png";
import ddprojectimg9 from "../../assets/ddprojectimg9.png";

const DDProject = () => {
  const projectData = [
    {
      img: ddprojectimg1,
      title: "45+",
      subtitle: "Customers",
      text: "Trust us with engineering program",
    },
    {
      img: ddprojectimg2,
      title: "110+",
      subtitle: "Projects",
      text: "Trust us with engineering program",
    },
    {
      img: ddprojectimg3,
      title: "12+",
      subtitle: "Multi Disciplinary Domain",
      text: "Trust us with engineering program",
    },
  ];

  const principalData = [
    {
      img: ddprojectimg4,
      title: "Turn Ideas into Reality",
      text: "Our expertise spans conceptual design and feasibility studies, helping you validate your product concept and refine it for success.",
    },
    {
      img: ddprojectimg5,
      title: "Develop Cutting-Edge Products",
      text: "Whether it's entirely new creations or upgrades to existing products, we'll guide you through the entire development process.",
    },
    {
      img: ddprojectimg6,
      title: "Sustenance & Product Upgrade",
      text: "Breathe new life into legacy products with our maintenance and upgrade services.",
    },
    {
      img: ddprojectimg7,
      title: "Test with Confidence",
      text: 'Our advanced "smart testing rig" development ensures thorough and efficient product evaluation.',
    },
    {
      img: ddprojectimg8,
      title: "Seamless Product Launch",
      text: "We handle product qualification, integration, testing, and certification, paving the way for a smooth market launch.",
    },
    {
      img: ddprojectimg9,
      title: "Protect Your Innovation",
      text: "We ensure secure intellectual property (IP) transfer and offer long-term support to keep your product thriving.",
    },
  ];

  return (
    <>
      <div>
        <div className="container-ddproject ">
          <div className="ms-2 ms-md-0">

          <Heading heading="Projects"  />
          </div>
          <p className="fontsecondry ms-2 ms-md-0">
            We have actualized projects in Aerospace, defence and UAV verticals
            which extends from engineering analysis to certifying of the sub
            system.
          </p>

          <div className="row row-cols-3 row-cols-md-3 g-2 g-md-4 ms-1 ms-md-0 ">
            {projectData.map((project, index) => (
              <div className="col px-md-3 px-1  " key={index}>
                <div className="border rounded-2 border-primary p-1 p-md-4 ddprojectcard">
                  <div className="card-body1 ">
                    <img
                      src={project.img}
                      className="ddproject_img mx-auto d-block mx-md-1"
                      alt="..."
                    />
                    <div className="d-flex mt-2">
                      <h1 className="card-title fw-bold text-primary mt-4 mt-md-2  p-0 col-4">
                        {project.title}
                      </h1>
                      <h6 className="  projecthead ">{project.subtitle}</h6>
                    </div>
                    <p className="fontsecondry mt-1">{project.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h6 className="mt-5 fontsecondry ms-1 ms-md-0">
            This engineering vertical is based on below principals
          </h6>
          <div className="row row-cols-3 row-cols-md-3 g-4 mt-1 ms-1 ms-md-0 ">
            {principalData.map((principal, index) => (
              <div className="col px-1 px-md-3 " key={index}>
                <div className="border rounded-2 p-1 border-primary cardddproject">
                  <img
                    src={principal.img}
                    className="pro_cardimg mt-3 mx-auto d-block "
                    alt="..."
                  />
                  <div className="titelcardpp text-center">
                    <h6 className="maincolor fw-bold fontsecondry">{principal.title}</h6>
                  </div>
                  <p className="p-0 p-md-2 fontsecondry">{principal.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DDProject;
