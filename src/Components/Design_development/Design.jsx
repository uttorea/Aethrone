import React from 'react';
import './Design.css';
import DD1 from '../../assets/DD1.png'
import DD2 from '../../assets/DD2.png'
import DD3 from '../../assets/DD3.png'
// import OwlcarouselComponent from '../../Components/OwlCarousel/OwlcarouselComponent';
import Furtblog from '../../Components/Feature-Blog/Furtblog';
// import Furtblog from '../../Feature-Blog/Furtblog';

function Design() {
    return (
        < >
        <div className="plane_head">
            <div className='designimg d-flex'>
                <img src={DD1} alt="" className='ddimg1' />
                <img src={DD2} alt="" className='ddimg2' />
            </div>
            {/* <div className="col-6">
            <div className="ddtext">
                <h3 className='text-secondary'>Design & Development</h3>
                <p className=''>Our comprehensive design and simulation services include conceptual design, feasibility studies, new product development, product upgrades, legacy product maintenance, and smart testing rig development. </p>
                <p className=''>We also provide product qualification, integration, testing, certification, IP transfer, and long-term support.</p>
                <button className='bg-primary'>Discover Design & Development </button>
            </div>
            </div> */}
            <div className="container">
            <div className=" dd_body">
                <div className="card p-5 bg-black text-dark bg-opacity-75 " style={{height:'450px'}}>
            <div class="row">
                <div class="col-sm-4">
                    <h3 className='text-white dd_heading px-2'>Design & Development</h3>
                    <small className='text-white '>From concept to product to certification</small>
                    <div className="dd_para mt-4">
                    <h6 className='text-white'>Our comprehensive design and simulation services include conceptual design, <br />feasibility studies, new product development, product upgrades,<br /> legacy product maintenance, and smart testing rig development. </h6>
                    <h6 className='text-white'>We also provide product qualification, integration, testing, certification, IP transfer, and long-term support.</h6>
                    </div>
                    <a className=' btn bg-primary text-white border-0 rounded-2 mt-4'>Discover Design & Development </a>
                </div>
                <div class="col-sm-8">
                    <img src={DD3} alt="" className='dd_img w-100 h-75'/>
                </div>
            </div>
                </div>
            </div>
            </div>
            <div>
    </div>
      {/* <Furtblog /> */}
      {/* <OwlcarouselComponent /> */}
      </div>
        </>
    )
}

export default Design
