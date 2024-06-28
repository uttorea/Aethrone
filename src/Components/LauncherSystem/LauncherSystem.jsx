import React from 'react'
import './LauncherSystem.css'
import launcherimg1 from '../../assets/launcherimg1.png'
import launcherimg2 from '../../assets/launcherimg2.png'
import launcherimg3 from '../../assets/launcherimg3.png'
import launcherimg4 from '../../assets/launcherimg4.jpg'
import launcherimg5 from '../../assets/launcherimg5.png'
import launcherimg6 from '../../assets/launcherimg6.png'
import launcherimg7 from '../../assets/launcherimg7.png'
import launcherimg8 from '../../assets/launcherimg8.png'
const LauncherSystem = () => {
    return (
        <>
        <div className='container mt-5'>
            <h4 className='launcher_heading px-2 m-0'>Launcher Systems</h4>
            <small className='px-3'>Systems for UAV & Loitering Munition</small>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card mt-5 border-0">
                        <img src={launcherimg1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p className='px-3'>Elevate your missions with our precision catapult launchers designed  specifically for unmanned aerial vehicles (UAVs). Engineered for  reliability and adaptability, our launchers ensure seamless deployment,  providing the precision and performance needed for mission success</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img src={launcherimg2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <ul>
                                <li>Land Based Bungee Catapult Launcher </li>
                                <li>Land Based Pneumatic Catapult Launcher</li>
                                <li>Land Based Pneumatic Tube Launcher</li>
                                <li>Air Based Underwing Pylon Pneumatic Carriage and Release</li>
                            </ul>
                            <a href="" className='btn btn-primary border-dark'>Explore Launcher System <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 px-5">
                <div class="col">
                    <div class="card h-100 border-primary">
                        <img src={launcherimg6} class="card-img-top" alt="..." />
                        <div class="card-footer border-5 border-primary">
                            <h6 className='text-primary'>Land Based <br />Bungee Catapult Launcher</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-primary">
                        <img src={launcherimg7} class="card-img-top" alt="..." />
                        <div class="card-footer border-5 border-primary">
                            <h6 className='text-primary'>Land Based <br />Pneumatic Tube launcher</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-primary">
                        <img src={launcherimg8} class="card-img-top" alt="..." />
                        <div class="card-footer border-5 border-primary">
                        <h6 className='text-primary'>Land Based <br />Pneumatic Catapult launcher</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LauncherSystem
