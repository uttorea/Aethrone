import React, { useState } from 'react';
import './Plane.css';
import planeimg1 from '../../assets/planeimg1.png';
import planeimg2 from '../../assets/planeimg2.png';
import planeimg3 from '../../assets/planeimg3.png';
import planeimg4 from '../../assets/planeimg4.png';
import planeimg5 from '../../assets/planeimg5.png';
import planeimg6 from '../../assets/planeimg6.png';
import planeimg7 from '../../assets/planeimg7.png';
import planeimg8 from '../../assets/planeimg8.png';

function Plane() {
    const [carousetTitle, setCarouselTitle] = useState("");

    const handleIndicatorClick = (title) => {
        setCarouselTitle(title);
    };

    return (
        <div className='plane mt-5'>
            <div className="container">
                <h3 className='plateform_text px-2' style={{ borderLeft: '4px solid blue' }}>Platforms We Work On</h3>
            </div>
            <div className="CaroPlane mb-5">
                <h4 className='text-primary'>{carousetTitle}</h4>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {[{
                                    dbsslide: "0",
                                    class: "active",
                                    ariacurrent: "true",
                                    arialabel: "slide 1",
                                    tabimg: planeimg1,
                                    text: "Light Combat Helicopter"
                                },
                                {
                                    dbsslide: "1",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 2",
                                    tabimg: planeimg2,
                                    text: "Light Utility Helicopter"
                                },
                                {
                                    dbsslide: "2",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 3",
                                    tabimg: planeimg3,
                                    text: "Advanced Light Helicopter"
                                },
                                {
                                    dbsslide: "3",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 4",
                                    tabimg: planeimg4,
                                    text: "Loitering Helicopter"
                                },
                                {
                                    dbsslide: "4",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 5",
                                    tabimg: planeimg5,
                                    text: "RUAVs"
                                },
                                {
                                    dbsslide: "5",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 6",
                                    tabimg: planeimg6,
                                    text: "Cruise Missiles"
                                },
                                {
                                    dbsslide: "6",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 7",
                                    tabimg: planeimg7,
                                    text: "Target UAV"
                                },
                                {
                                    dbsslide: "7",
                                    class: "",
                                    ariacurrent: "",
                                    arialabel: "slide 8",
                                    tabimg: planeimg8,
                                    text: "Advanced Air Mobility"
                                }].map((data, key) => (
                                    <button
                                        key={key}
                                        className={`carouselbtn ${data.class}`}
                                        type="button"
                                        onClick={() => handleIndicatorClick(data.text)}
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to={data.dbsslide}
                                        aria-current={data.ariacurrent}
                                        aria-label={data.arialabel}
                                    >
                                        <img src={data.tabimg} className="carouselbtnimg" alt={data.text} />
                                    </button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={planeimg1} className="corimg" alt="Light Combat Helicopter" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg2} className="corimg" alt="Light Utility Helicopter" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg3} className="corimg" alt="Advanced Light Helicopter" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg4} className="corimg" alt="Loitering Helicopter" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg5} className="corimg" alt="RUAVs" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg6} className="corimg" alt="Cruise Missiles" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg7} className="corimg" alt="Target UAV" />
                                </div>
                                <div className="carousel-item">
                                    <img src={planeimg8} className="corimg" alt="Advanced Air Mobility" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <i className="bi bi-arrow-left-square" style={{ fontSize: '2rem', color: '#3535DE' }} aria-hidden="true"></i>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <i className="bi bi-arrow-right-square" style={{ fontSize: '2rem', color: '#3535DE' }} aria-hidden="true"></i>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plane;
