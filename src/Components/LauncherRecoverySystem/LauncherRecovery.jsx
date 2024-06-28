import React from 'react'
import launcherimg3 from '../../assets/launcherimg3.png'
import launcherimg4 from '../../assets/launcherimg4.jpg'
import launcherimg5 from '../../assets/launcherimg5.png'
import launcherimg9 from '../../assets/launcherimg9.png'
import launcherimg10 from '../../assets/launcherimg10.png'

const LauncherRecovery = () => {
  return (
    <>
    <div className='container mt-5'>
    <h4 className='launcher_heading px-2 '>Launcher Systems</h4>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card mt-5 border-0">
                <img src={launcherimg9} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p className='px-3'>Elevate your missions with our precision catapult launchers designed  specifically for unmanned aerial vehicles (UAVs). Engineered for  reliability and adaptability, our launchers ensure seamless deployment,  providing the precision and performance needed for mission success</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-0">
                <img src={launcherimg10} class="card-img-top" alt="..." />
                <div class="card-body">
                    <ul>
                        <li>Parachute Based Land Recovery</li>
                        <li>Parachute Based Sea Recovery</li>
                        <li>Airbag Based Land Recovery</li>
                        <li>Airbag Based Sea Recovery</li>
                    </ul>
                    <a href="" className='btn btn-primary border-dark'>Explore Recovery System <i class="bi bi-arrow-down"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 px-5">
        <div class="col">
            <div class="card h-100 border-primary">
                <img src={launcherimg3} class="card-img-top" alt="..." />
                <div class="card-footer border-5 border-primary">
                    <h6 className='text-primary'>Land Based <br />Bungee Catapult Launcher</h6>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 border-primary">
                <img src={launcherimg4} class="card-img-top" alt="..." style={{height:'250px'}}/>
                <div class="card-footer border-5 border-primary">
                    <h6 className='text-primary'>Land Based <br />Pneumatic Tube launcher</h6>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 border-primary">
                <img src={launcherimg5} class="card-img-top" alt="..." />
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

export default LauncherRecovery
