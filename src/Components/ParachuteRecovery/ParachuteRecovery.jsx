import React from 'react'
import './ParachuteRecovery.css'
import parachuteRecovery1 from '../../assets/parachuteRecovery1.jpg'
import fullbgimg from '../../assets/fullbgimg.png'
import Ballistic from '../BallisticRecovery/Ballistic'

const ParachuteRecovery = () => {
  return (
    <>
    <div>
       <div className='paraRecovery_page'>
                <div className="row">
                    <div className="col">
                        <img src={parachuteRecovery1} alt="" className='paraRecovery1' />
                        <img src={fullbgimg} alt="" className='paraRecovery2' />
                        <div className='paraRecovery_content'>
                            <h1 className=''>Recovery Systems</h1>
                            <p>Plug and Plane Solution</p>
                            <h3 className='paraRecovery_para1 mt-3 px-2'>What We Do</h3>
                            <div className='paraRecovery2_para2 p-5'>
                                <p>We offer airframe specific customised products from 50 kgs to 300 kgs All Up Weight.</p>
                                <p>We design and deliver plug and play parachute based recovery systems for both fixed and rotary wing UAS between 5 to 300Kg <br/> UAV systems. </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div> 
    </div>
    <Ballistic/>
    </>
  )
}

export default ParachuteRecovery
