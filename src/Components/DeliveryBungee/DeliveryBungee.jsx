import React from 'react'
import './DeliveryBungee.css'
import bungeeImg from '../../assets/bungeeImg.png'
const DeliveryBungee = () => {
    return (
        <div className='container' style={{marginTop:'100px'}}>
            <h4 className='border-start border-primary border-5 px-2 fw-bold m-0'>Bungee Catapult Launcher ~ YPJ 30</h4>
            <small className='px-3'>Specification</small>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card border-0">
                        <div class="card-body ">
                            <p class="card-text">This Custom Off The Shelf Launcher can be used to launch upto 30 kgs of Fixed Wing UAVs.</p>
                            <table className=' w-100'>
                                <tr className=''>
                                    <td className='border-1 text-start px-5 p-3'>Maximum Aircraft Weight <br />Corresponding Max Velocity</td>
                                    <td className='border-1 text-start px-5'>30 kgs / 30m/s</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>G load on aircraft</td>
                                    <td className='border-1 text-start px-5'>5Gs</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Launcher Weight</td>
                                    <td className='border-1 text-start px-5'>72 kgs</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Launch Angle</td>
                                    <td className='border-1 text-start px-5'>15 - 35 Deg</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Indigenous Content</td>
                                    <td className='border-1 text-start px-5'>75 %</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card border-0 px-5 mt-4">
                            <img src={bungeeImg} alt="" className=' shadow p-3 mb-5 bg-body rounded border-start border-top border-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryBungee
