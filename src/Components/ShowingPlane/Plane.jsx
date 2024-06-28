import React, { useState } from 'react'
import './Plane.css'
import planeimg1 from '../../assets/planeimg1.png';
import planeimg2 from '../../assets/planeimg2.png';
import planeimg3 from '../../assets/planeimg3.png';
import planeimg4 from '../../assets/planeimg4.png';
import planeimg5 from '../../assets/planeimg5.png';
import planeimg6 from '../../assets/planeimg6.png';
import planeimg7 from '../../assets/planeimg7.png';
import planeimg8 from '../../assets/planeimg8.png';
// import planeimg9 from '../../assets/planeimg9.png';
// import Design from '../Design_development/Design';



function Plane() {
    const [carousetTitle, setCarouselTitle] = useState("");
    return (
        <>
        <div className='plane mt-5'>
            <div className="container">
                <h3 className=' plateform_text px-2' style={{ borderLeft: '4px solid blue' }}>Plateforms We Work On</h3>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators2" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            {[{
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "0",
                                class: "active",
                                ariacurrent: "true",
                                arialable: "slide 1",
                                tabimg: planeimg1,
                                text: "Light Combact halicopter"
                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "1",
                                class: "",
                                ariacurrent: "",
                                arialable: "slide 2",
                                tabimg: planeimg2,
                                text: "Light Utility halicopter"

                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "2",
                                class: "",
                                ariacurrent: "",
                                arialable: "slide 3",
                                tabimg: planeimg3,
                                text: "Advance Light halicopter"

                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "3",
                                class: "active",
                                ariacurrent: "true",
                                arialable: "slide 1",
                                tabimg: planeimg4,
                                text: "Loitering halicopter"


                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "4",
                                class: "",
                                ariacurrent: "",
                                arialable: "slide 2",
                                tabimg: planeimg5,
                                text: "RUAVs"


                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "5",
                                class: "",
                                ariacurrent: "",
                                arialable: "slide 3",
                                tabimg: planeimg6,
                                text: "Cruise Missiles"


                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "6",
                                class: "active",
                                ariacurrent: "true",
                                arialable: "slide 1",
                                tabimg: planeimg7,
                                text: "Target UAV"


                            },
                            {
                                dbstarget: "#carouselExampleIndicators2",
                                dbsslide: "7",
                                class: "",
                                ariacurrent: "",
                                arialable: "slide 2",
                                tabimg: planeimg8,
                                text: "Advance Air Mobility"


                            },

                            ].map((data, key) => {
                                return <button className={`carouselbtn ${data.class}`} type="button" onClick={() => setCarouselTitle(data.text)} data-bs-target={data.dbstarget} data-bs-slide-to={data.dbsslide} aria-current={data.ariacurrent} aria-label={data.arialable} >
                                    <img src={data.tabimg} className="carouselbtnimg" alt="" /></button>
                            })}


                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={planeimg1} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg2} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg3} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg4} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg5} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg6} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg7} className="corimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={planeimg8} className="corimg" alt="..." />
                            </div>
                            {/* <div class="carousel-item">
                                <img src={planeimg9} className="corimg" alt="..." />
                            </div> */}
                        </div>
                        <div className="CaroPlane mb-5" style={{position:'absolute', left:'250px'}}>
                            <h4 className='text-primary'>{carousetTitle}</h4>
                        </div>
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>

                </div>
            </div>
        </div>
        {/* <Design /> */}
        </>
    )
}

export default Plane
