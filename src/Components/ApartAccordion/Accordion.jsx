import React from 'react'
import './Accordion.css'
import Heading from '../../Components/HeadingComponent/HeadingComponent'
import acordionimg1 from '../../assets/acordionimg1.png'
import acordionimg2 from '../../assets/acordionimg2.png'
import acordionimg3 from '../../assets/acordionimg3.png'
import acordionimg4 from '../../assets/acordionimg4.png'

const accordionItems = [
    {
        img: acordionimg1,
        heading: 'A credible record of actualizing technically challenging projects',
        body: 'Our comprehensive services streamline the development process, getting your product to market faster',
    },
    {
        img: acordionimg2,
        heading: 'A deep understanding of manned-Unmanned systems in key aerospace and defence segment',
        body: 'Our team of specialists provides the knowledge and experience you need to succeed',
    },
    {
        img: acordionimg3,
        heading: 'A disciplined implementation of iterative optimization processes',
        body: 'Rigorous testing and certification guarantee a high-performing, reliable product.',
    },
    {
        img: acordionimg4,
        heading: 'Support throughout your product\'s lifecycle',
        body: 'We\'re here to support you throughout your product\'s lifecycle',
    },
];

const Accordion = () => {
    return (
        <>
            <div className='according-container w-80 mx-auto mt-5'>
                <div className='ms-2 ms-md-0'>
                    <Heading heading='What Sets Us Apart' subheading='D&D'/>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className=" border-0">
                            <div className="">
                                <h2 className="maincolor mt-5 whyAccording ms-1 ms-md-0">Why <br />Aethorne Aerospace</h2>
                                <h3 className='mt-5 foryouraccording ms-1 ms-md-0'>for your<br /> Model Based <br />System Engineering ?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ">
                        <div className=" border-0 px-0 px-md-3 acordinmaincard">
                            <div className="accordion w-100" id="accordionExample">
                                {accordionItems.map((item, index) => (
                                    <div key={index} className="accordion-item border-0 border-bottom border-dark ">
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button className="accordion-button collapsed px-0 py-2 px-md-4 py-md-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                <img src={item.img} alt="" className='accordinimg' />
                                                <h5 className='px-1 px-md-3 accordingheading'>{item.heading}</h5>
                                                <span className="expand-text accordingheading">
                                                    Expand <i className="fa fa-plus ms-2"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {item.body}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion
