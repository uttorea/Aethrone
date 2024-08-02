import React from "react";
import "./KeyTechno.css";
import SimpleCard from "../../Components/SimpleCards/SimpleCard";
import KeyTechnoIMG from "../../Components/KeyTechnology/KeyTechnoIMG";
import Heading from "../../Components/HeadingComponent/HeadingComponent";

const KeyTechno = () => {
  return (
    <div className="keyTechno_page mt-5">
      <div className="container my-4 mt-5 px-0">
        <div className="px-3">
          <Heading heading="Key Technologies" subheading="What we work with" />
        </div>
<div className="ps-0 ps-md-5 mt-4">


        <SimpleCard
          images={KeyTechnoIMG}
          cardHeight="248.25px"
          cardWidth="191.25px"
          imgHeights={{
            0: "116.77px",
            1: "166.77px",
            2: "120px",
            3: "60px",
            4: "66px",
          }}
          imgWidths={{
            0: "124.75px",
            1: "174.75px",
            2: "113.25px",
            3: "168px",
            4: "168px",
          }}
          responsiveCardHeights={{
            0: "200px",
            1: "200px",
            2: "200px",
            3: "200px",
            4: "200px",
          }}
          responsiveCardWidths={{
            0: "100px",
            1: "100px",
            2: "100px",
            3: "100px",
            4: "100px",
          }}
          responsiveImgHeights={{
            0: "50px",
            1: "50px",
            2: "50px",
            3: "50px",
            4: "50px",
          }}
          responsiveImgWidths={{
            0: "50px",
            1: "60px",
            2: "60px",
            3: "60px",
            4: "60px",
          }}
        />
</div>
        <p className="mt-5 fontsecondry px-3 fontfamilySecondary fontweight">
          Technology lies at the core of sustainable progress. Aethrone
          Aerospace's sustainable transformation initiatives are anchored in the
          strategic adoption of five cutting-edge technologies. Each of these
          technologies is adept at delivering distinct business outcomes both
          presently and in the long term. Through our emphasis on these
          technologies, we guarantee coherence throughout our portfolio and
          offer the versatility needed to address varied business hurdles across
          industry sectors.
        </p>
      </div>
    </div>
  );
};

export default KeyTechno;
