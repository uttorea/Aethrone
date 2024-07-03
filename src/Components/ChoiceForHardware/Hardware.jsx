import React, { useState, useEffect } from 'react';
import './Hardware.css';
import hardwareimg1 from '../../assets/hardwareimg1.png';
import hardwareimg2 from '../../assets/hardwareimg2.png';
import hardwareimg3 from '../../assets/hardwareimg3.png';
import hardwareimg4 from '../../assets/hardwareimg4.png';

const AccordionItem = ({ index, title, content, isActive, onToggle }) => (
  <div className="card">
    <div
      className="card-header fw-bold text-primary justify-content-center d-flex"
      onClick={() => onToggle(index)}
      aria-expanded={isActive}
    >
      <div className="">
        <span className=''>{title}</span>
        <img src={hardwareimg4} className="hardware_img2  justify-content-end" alt="Hardware Image" />
      </div>
      <span className={`accordion-icon ${isActive ? 'active' : ''}`}>
      </span>
    </div>
    <div
      id={`collapse${index}`}
      className={`collapse ${isActive ? 'show' : ''} width`}
      data-bs-parent="#accordionHorizontalExample"
    >
      <div className="card-body">
        {content}
      </div>
    </div>
  </div>
);
const Accordion = ({ activeIndex, handleToggle }) => (
  <div className="accordion width" id="accordionHorizontalExample">
    <AccordionItem
      index={1}
      title="Dedicated Engineering Expertise"
      content={
        <>
          <ul>
            <li className="fw-bold">Build to Specification / Print: </li>
            <p>Our team of highly qualified engineers are well versed with Modelling and simulation to work as an extended development team. From design optimization to troubleshooting complex challenges, we offer expert guidance every step of the way.</p>
          </ul>
          <ul className="mt-5">
            <li className="fw-bold">Advanced Manufacturing Knowledge: </li>
            <p>We stay at the forefront of advanced manufacturing technologies, allowing us to recommend the most suitable processes and materials for your specific needs.</p>
          </ul>
        </>
      }
      isActive={activeIndex === 1}
      onToggle={handleToggle}
    />
<AccordionItem
     index={2}
      title="Uncompromising Quality"
      content={
        <>
          <ul>
            <li className="fw-bold">Stringent Quality Control: </li>
            <p>We adhere to the highest quality standards, including [mention specific certifications, e.g., AS9100]. Inline rigorous inspections throughout the manufacturing process ensure every component meets your exact specifications.</p>
          </ul>
          <ul className="mt-5">
            <li className="fw-bold">Traceability & Documentation: </li>
            <p>We maintain complete traceability records for all materials and processes, providing you with peace of mind and compliance with industry regulations.</p>
          </ul>
        </>
      }
      isActive={activeIndex === 2}
      onToggle={handleToggle}
    />
    <AccordionItem
      index={3}
      title="On-Time Delivery and Project Management"
      content={
        <>
          <ul>
            <li className="fw-bold">Reliable Scheduling: </li>
            <p>We understand the importance of meeting deadlines. Our experienced project managers work closely with you to ensure on-time delivery, keeping your project running smoothly.</p>
          </ul>
          <ul className="mt-5">
            <li className="fw-bold">Open Communication: </li>
            <p>We maintain clear and consistent communication throughout the entire process, keeping you informed of progress and addressing any questions promptly.</p>
          </ul>
        </>
      }
      isActive={activeIndex === 3}
      onToggle={handleToggle}
    />  </div>
);



const Hardware = () => {
  const [accordionVisible, setAccordionVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setAccordionVisible(true);
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const horizontalAccordions = document.querySelectorAll('.accordion.width');
    horizontalAccordions.forEach((accordion) => {
      const collapse = accordion.querySelectorAll('.collapse');
      const bodies = accordion.querySelectorAll('.collapse > *');
      accordion.style.height = `${accordion.offsetHeight}px`;
      bodies.forEach(body => {
        body.style.width = `${bodies[0].offsetWidth}px`;
      });
      collapse.forEach(element => {
        if (!element.classList.contains('show')) {
          element.parentElement.querySelector("[data-bs-toggle='collapse']").classList.add('collapsed');
        }
      });
    });
  }, []);

  return (
    <div className="hardware_body mt-5">
      <div className="container">
        <h3 className="hardware_heading px-2 fw-bold">Aethrone: Your Choice For Hardware Needs</h3>
        <div className="row row-cols-1 row-cols-md-3 g-5 mt-4">
          {!accordionVisible && (
            <>
              <div className="col">
                <div className="hardware_card">
                  <div className="card border-primary border-2">
                    <img src={hardwareimg1} className="hardware_img rounded" alt="..." />
                    <div className="card_items">
                      <img
                        src={hardwareimg4}
                        className="hardware_img2"
                        alt="..."
                        onClick={() => handleImageClick(1)}
                      />
                      <h5>Dedicated Engineering Expertise </h5>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hardware_card">
                  <div className="card border-primary border-2">
                    <img src={hardwareimg2} className="hardware_img rounded" alt="..." />
                    <div className="card_items">
                      <img
                        src={hardwareimg4}
                        className="hardware_img2"
                        alt="..."
                        onClick={() => handleImageClick(2)}
                      />
                      <h5>Uncompromising Quality</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hardware_card">
                  <div className="card border-primary border-2">
                    <img src={hardwareimg3} className="hardware_img rounded" alt="..." />
                    <div className="card_items">
                      <img
                        src={hardwareimg4}
                        className="hardware_img2"
                        alt="..."
                        onClick={() => handleImageClick(3)}
                      />
                      <h5>On-Time Delivery and Project Management</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {accordionVisible && (
            <Accordion activeIndex={activeIndex} handleToggle={handleToggle} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hardware;
