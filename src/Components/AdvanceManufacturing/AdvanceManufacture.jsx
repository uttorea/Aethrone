import React from 'react'
import './AdvanceManufacture.css'
import manufacturimg from '../../assets/manufacturimg.png'
import fullbgimg from '../../assets/fullbgimg.png'
import FourPillars from '../FourPillars/FourPillars'
import ManuService from '../ManufacturingService/ManuService'
import FocusArea from '../FocusArea/FocusArea'
import ManuCertification from '../ManuCertification/ManuCertification'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
const AdvanceManufacture = () => {
    return (
        <>
            <div className='advanceManu_page'>
                <img src={manufacturimg} alt="" className='advManufactureimg1' />
                <img src={fullbgimg} alt="" className='advManufactureimg2' />
                <div className="container">
                    <div className='advanceManu_content'>
                        <h1 className='am_text'>Precision Manufacturing & Advance Composite</h1>
                        <h3 className='advanceManu_para1 mt-3 px-2'>What We Do</h3>
                        <div className='advanceManu_para2 p-4 bg-black opacity-75 rounded mt-3 w-75'>
                            <p>We deliver hardware at exceptional speeds, keeping you informed and in control throughout the process. </p>
                            <p>Our extensive capabilities in size, material variety, and finishing options allow us to provide the perfect solution for your needs. </p>
                            <p>Combined with exceptional customer service, we're the supplier you can trust to propel you to the forefront of your market.</p>
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
