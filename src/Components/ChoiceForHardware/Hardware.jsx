import React, { useState, useEffect } from 'react';
import './Hardware.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent'
import hardwareimg1 from '../../assets/hardwareimg1.png';
import hardwareimg2 from '../../assets/hardwareimg2.png';
import hardwareimg3 from '../../assets/hardwareimg3.png';
import hardwareimg4 from '../../assets/hardwareimg4.png';

const accordionData = [
  {
    index: 1,
    title: "Dedicated Engineering Expertise",
    content: (
      <>
        <ul>
          <li className="fw-bold hardware-heading">Build to Specification / Print: </li>
          <p className='hardware-subheading'>Our team of highly qualified engineers are well versed with Modelling and simulation to work as an extended development team. From design optimization to troubleshooting complex challenges, we offer expert guidance every step of the way.</p>
        </ul>
        <ul className="mt-0 mt-md-5">
          <li className="fw-bold hardware-heading">Advanced Manufacturing Knowledge: </li>
          <p className='hardware-subheading'>We stay at the forefront of advanced manufacturing technologies, allowing us to recommend the most suitable processes and materials for your specific needs.</p>
        </ul>
      </>
    )
  },
  {
    index: 2,
    title: "Uncompromising Quality",
    content: (
      <>
        <ul>
          <li className="fw-bold hardware-heading">Stringent Quality Control: </li>
          <p className='hardware-subheading'>We adhere to the highest quality standards, including [mention specific certifications, e.g., AS9100]. Inline rigorous inspections throughout the manufacturing process ensure every component meets your exact specifications.</p>
        </ul>
        <ul className="mt-0 mt-md-5">
          <li className="fw-bold hardware-heading">Traceability & Documentation: </li>
          <p className='hardware-subheading'>We maintain complete traceability records for all materials and processes, providing you with peace of mind and compliance with industry regulations.</p>
        </ul>
      </>
    )
  },
  {
    index: 3,
    title: "On-Time Delivery and Project Management",
    content: (
      <>
        <ul className=''>
          <li className="fw-bold hardware-heading">Reliable Scheduling: </li>
          <p className='hardware-subheading'>We understand the importance of meeting deadlines. Our experienced project managers work closely with you to ensure on-time delivery, keeping your project running smoothly.</p>
        </ul>
        <ul className="mt-0 mt-md-5">
          <li className="fw-bold hardware-heading">Open Communication: </li>
          <p className='hardware-subheading'>We maintain clear and consistent communication throughout the entire process, keeping you informed of progress and addressing any questions promptly.</p>
        </ul>
      </>
    )
  }
];

const hardwareData = [
  {
    imgSrc: hardwareimg1,
    title: "Dedicated Engineering Expertise",
    index: 1,
    titleClass: "title-position-1"
  },
  {
    imgSrc: hardwareimg2,
    title: "Uncompromising Quality",
    index: 2,
    titleClass: "title-position-2"
  },
  {
    imgSrc: hardwareimg3,
    title: "On-Time Delivery and Project Management",
    index: 3,
    titleClass: "title-position-3"
  }
];

const AccordionItem = ({ index, title, content, isActive, onToggle }) => (
  <div className="card hardware-card-in">
    <div
      className="card-header fw-bold text-primary flex-column justify-content-between   d-flex  py-md-2 px-md-3 px-0 py-0 "
      onClick={() => onToggle(index)}
      aria-expanded={isActive}
    >
      <div className="d-flex justify-content-between ">
        <span className='hardwareintitle'>{title}</span>
        <img src={hardwareimg4} className={`hardware_img2 ${isActive ? 'rotate' : ''} `} alt="Hardware Icon" />
      </div>
      <span className={`accordion-icon ${isActive ? 'active' : ''}`}>
      </span>
    </div>
    <div
      id={`collapse${index}`}
      className={`collapse ${isActive ? 'show' : ''} width`}
      data-bs-parent="#accordionHorizontalExample"
    >
      <div className="hardware_card_body p-md-3 p-0">
        {content}
      </div>
    </div>
  </div>
);

const Accordion = ({ activeIndex, handleToggle }) => (
  <div className="accordion width" id="accordionHorizontalExample">
    {accordionData.map(item => (
      <AccordionItem
        key={item.index}
        index={item.index}
        title={item.title}
        content={item.content}
        isActive={activeIndex === item.index}
        onToggle={handleToggle}
      />
    ))}
  </div>
);

const Hardware = () => {
  const [accordionVisible, setAccordionVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setAccordionVisible(true);
  };

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setAccordionVisible(false);
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setAccordionVisible(true);
    }
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
      <div className="container-hardware">
        <Heading heading='Aethrone: Your Choice For Hardware Needs' />
        <div className="row row-cols-3 row-cols-md-3 g-1 g-md-5 mt-4">
          {!accordionVisible && (
            <>
              {hardwareData.map(item => (
                <div className="col" key={item.index}>
                  <div className="hardware_card">
                    <div className="card border-primary border-2 col hardwarecardimg">
                      <img src={item.imgSrc} className="hardware_img rounded" alt="..." onClick={() => handleImageClick(item.index)} />
                      <div className={`hardware_card_items text-center ${item.titleClass}`}>
                        <img
                          src={hardwareimg4}
                          className="hardware_img21"
                          alt="..."
                          onClick={() => handleImageClick(item.index)}
                        />
                        <h5 onClick={() => handleImageClick(item.index)} className='hardware-card-tile'>{item.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
