import React from 'react'
import './LauncherSystem.css'
import launcherimg1 from '../../assets/launcherimg1.png'
import launcherimg2 from '../../assets/launcherimg2.png'
// import launcherimg3 from '../../assets/launcherimg3.png'
// import launcherimg4 from '../../assets/launcherimg4.jpg'
// import launcherimg5 from '../../assets/launcherimg5.png'
import launcherimg6 from '../../assets/launcherimg6.png'
import launcherimg7 from '../../assets/launcherimg7.png'
import launcherimg8 from '../../assets/launcherimg8.png'
const   LauncherSystem = () => {

    const cardData = [
        {
          imgSrc: launcherimg6,
          title: "Land Based",
          subtitle: "Bungee Catapult Launcher",
        },
        {
          imgSrc: launcherimg7,
          title: "Land Based",
          subtitle: "Pneumatic Tube launcher",
        },
        {
          imgSrc: launcherimg8,
          title: "Land Based",
          subtitle: "Pneumatic Catapult launcher",
        },
      ];

    return (
        <>
        <div className='container mt-5'>
            <h3 className='launcher_heading px-2 m-0 fw-bold'>Launcher Systems</h3>
            <small className='px-3'>Systems for UAV & Loitering Munition</small>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card mt-5 border-0">
                        <img src={launcherimg1} className="card-img-top1" alt="..." />
                        <div className="card-body">
                            <p className='px-3'>Elevate your missions with our precision catapult launchers designed  specifically for unmanned aerial vehicles (UAVs). Engineered for  reliability and adaptability, our launchers ensure seamless deployment,  providing the precision and performance needed for mission success</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <img src={launcherimg2} className="card-img-top1" alt="..." />
                        <div className="card-body">
                            <ul>
                                <li>Land Based Bungee Catapult Launcher </li>
                                <li>Land Based Pneumatic Catapult Launcher</li>
                                <li>Land Based Pneumatic Tube Launcher</li>
                                <li>Air Based Underwing Pylon Pneumatic Carriage and Release</li>
                            </ul>
                            <a href="" className='btn btn-primary border-dark'>Explore Launcher System <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 px-5">
    {cardData.map((card, index) => (
      <div className="col" key={index}>
        <div className="card h-100 border-primary">
          <img src={card.imgSrc} className="card-img-top" alt="..." />
          <div className="card-footer border-5 border-primary">
            <h6 className="text-primary">
              {card.title} <br />
              {card.subtitle}
            </h6>
          </div>
        </div>
      </div>
    ))}
  </div>
        </div>
        </>
    )
}

export default LauncherSystem
