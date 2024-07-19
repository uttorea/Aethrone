import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import { ScrollSpy } from "bootstrap";
import "./CompositeCapability.css";
import scrollImg1 from "../../assets/scrollImg1.png";
import scrollImg2 from "../../assets/scrollImg2.png";
import scrollImg3 from "../../assets/scrollImg3.png";
import scrollImg4 from "../../assets/scrollImg4.png";
import scrollImg5 from "../../assets/scrollImg5.png";
import scrollImg6 from "../../assets/scrollImg6.png";
import scrollImg7 from "../../assets/scrollImg7.png";

const listItems = [
  { id: "list-item-1", marginBottom: "225px" },
  { id: "list-item-2", marginBottom: "255px" },
  { id: "list-item-3", marginBottom: "440px" },
  { id: "list-item-4", marginBottom: "300px" },
  { id: "list-item-5", marginBottom: "360px" },
  { id: "list-item-6", marginBottom: "360px" },
  { id: "list-item-7", marginBottom: "360px" },
];

const scrollImages = [
  { id: "list-item-1", src: scrollImg1, alt: "scrollImg1" },
  { id: "list-item-2", src: scrollImg2, alt: "scrollImg2" },
  { id: "list-item-3", src: scrollImg3, alt: "scrollImg3" },
  { id: "list-item-4", src: scrollImg4, alt: "scrollImg4" },
  { id: "list-item-5", src: scrollImg5, alt: "scrollImg5" },
  { id: "list-item-6", src: scrollImg6, alt: "scrollImg6" },
  { id: "list-item-7", src: scrollImg7, alt: "scrollImg7" },
];

const CompositeCapability = () => {
  useEffect(() => {
    const scrollSpy = new ScrollSpy(document.body, {
      target: "#navbar-example",
    });

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    const images = document.querySelectorAll(".scroll_img");
    const headings = document.querySelectorAll(".composititem p");

    images.forEach((image) => {
      observer.observe(image);
    });

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      scrollSpy.dispose();
      images.forEach((image) => {
        observer.unobserve(image);
      });
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  return (
    <div className="container">
      <Heading heading="Capability" subheading="manufacture of simple composit structure" />
      <div className="row p-3 mt-5 myrow shadow-lg custom-row">
        <div className="col-md-7">
          <div id="list-example" className="list-group">
            {listItems.map((item) => (
              <a
                key={item.id}
                className="composititem list-group-item-action p-5 border "
                href={`#${item.id}`}
              >
                <p className="p-5 ">
                  Our advanced composites exhibit exceptional strength-to-weight
                  ratios, ideal for aerospace and automotive applications,
                  ensuring superior performance and durability.
                </p>
                <h3 className="px-4 text-center" style={{ color: "blue" }}>
                  Build to<br />Specification
                </h3>
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-5 pe-0">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            className="scrollspy-example"
            tabIndex="0"
          >
            {scrollImages.map((image) => (
              <div
                key={image.id}
                id={image.id}
                className="card align-items-center d-flex"
                style={{ padding: "60px" }}
              >
                <img
                  src={image.src}
                  className="card-img-top scroll_img"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositeCapability;
