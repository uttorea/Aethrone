import React from 'react'
import './AdvanceManufacture.css'
import manufacturimg from '../../assets/manufacturimg.png'
// import fullbgimg from '../../assets/fullbgimg.png'
import FourPillars from '../FourPillars/FourPillars'
import ManuService from '../ManufacturingService/ManuService'
import FocusArea from '../FocusArea/FocusArea'
import ManuCertification from '../ManuCertification/ManuCertification'
import Project from '../Project/Project'
import Footer from '../Footer/Footer';
import HeadingComponent from '../HeadingComponent/HeadingComponent'
const AdvanceManufacture = () => {
    return (
        <>
            <div className='advanceManu_page'>
                <img src={manufacturimg} alt="" className='advManufactureimg1' />
                <div className="container-md container-fluid">
                    <div className='advanceManu_content ms-md-5 ms-1'>
                        <h1 className='am_text '>Precision Manufacturing & <br/> Advance Composite</h1>
                        <div className='adm-heading'>
                        <HeadingComponent heading='What We Do' />
                        </div>
                       
                        <div className='advanceManu_para2 fontsecondry fontfamilySecondary fontweight p-md-5 p-2 bg-black opacity-75 rounded mt-md-3 me-md-0 me-3 col-12'>
                            <p className='pe-5'>We deliver hardware at exceptional speeds, keeping you informed and in control throughout the process. </p>
                            <p className='pe-5'>Our extensive capabilities in size, material variety, and finishing options allow us to provide the perfect solution for your needs. </p>
                            <p className='pe-5'>Combined with exceptional customer service, we're the supplier you can trust to propel you to the forefront of your market.</p>
                        </div>

                    </div>

                </div>

            </div>
            <FourPillars />
            <ManuService />
            <FocusArea />
            <ManuCertification />
            <Project />
            <Footer />
        </>
    )
}

export default AdvanceManufacture
