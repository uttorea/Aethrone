import React from 'react'
import './Parachute.css'
import parachuteBgimg1 from '../../assets/parachuteBgimg1.jpg'
import fullbgimg from '../../assets/fullbgimg.png'
import ParachuteProduct from '../ParachuteProduct/ParachuteProduct'
const Parachute = () => {
    return (
        <>
        <div className='parachute_container'>
            <img src={parachuteBgimg1} alt="" className='launchimg1' />
            <img src={fullbgimg} alt="" className='parachuteimg2' />
                <div className='launch_content'>
                    <h1 className=''>Parachutes & <br /> Lighter Than Air Technology</h1>
                    <div class="row mt-5">
                        <div class="col-sm-6">
                    <h3 className='lrdimg_para1 mt-4 px-2'>Product Development</h3>
                            <div class="card bg-transparent border-0 mt-5">
                                <div class="card-body" style={{backgroundColor:'rgba(0,0,0,0.75)'}}>
                                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                    <p class="card-text py-4 text-light">We specialize in designing, developing, testing, and certifying products<br/>within the para category, catering to diverse groups of users. Our goal<br/>is to maintain our position as leaders within this segment in India.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                        <h3 className='lrdimg_para1 mt-4 px-2'>Technical Approach</h3>
                            <div class="card bg-transparent border-0 mt-5">
                                <div class="card-body"  style={{backgroundColor:'rgba(0,0,0,0.75)'}}>
                                <p class='card-text text-light'>Our strategy employs in-house Aerodynamic-structural Design, and<br/>Optimization techniques, including Computation Fuild Dynamics and <br/>Computer Aided Design. We also collaborate with a wind tunnel <br/>facility and technical textile company for rapid prototyping and testing.</p>   
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
        <ParachuteProduct/>
        </>
    )
}

export default Parachute
