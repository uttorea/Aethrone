import React,{useEffect} from 'react'
import tubeLauncher from '../../assets/tubeLauncher.png'
import tubeLauncher1 from '../../assets/Tubelauncher1.png'
import tubeLauncher2 from '../../assets/Tubelauncher2.png'
import './TubeLauncher.css'
const TubeLauncher = () => {
  useEffect(() => {
    // Intersection Observer API to handle image animations
    const observerOptions = {
        threshold: 0.5 // Adjust based on when you want the animation to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const images = document.querySelectorAll('.scroll_img');
    const headings = document.querySelectorAll('.scroll_heading');

    images.forEach(image => {
        observer.observe(image);
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });

    return () => {
        // Clean up the observer
        images.forEach(image => {
            observer.unobserve(image);
        });
        headings.forEach(heading => {
            observer.unobserve(heading);
        });
    };
}, []);

return (
    <div className='container' style={{marginTop:'100px'}}>
        <h4 className='border-start border-primary border-5 px-2 fw-bold m-0 scroll_heading'>Tube Launcher ~ FBM10</h4>
        <small className='px-3 scroll_heading'>Specification</small>
        <div className="row">
            <div className="col-sm-6">
                <div className="card border-0">
                    <div className="card-body">
                        <p className="card-text scroll_heading">This Custom Off The Shelf Launcher can be used to launch upto 10 kgs of Foldable Wing UAVs.</p>
                        <table className=' w-100 scroll_heading'>
                            <tr className=''>
                                <td className='border-1 text-start px-5 p-3'>Maximum Aircraft Weight <br />Corresponding Max Velocity</td>
                                <td className='border-1 text-start px-5'>10 kgs</td>
                            </tr>
                            <tr>
                                <td className='border-1 text-start px-5 p-3'>G load on aircraft</td>
                                <td className='border-1 text-start px-5'>35 m/s</td>
                            </tr>
                            <tr>
                                <td className='border-1 text-start px-5 p-3'>Launcher Weight</td>
                                <td className='border-1 text-start px-5'>20 G</td>
                            </tr>
                            <tr>
                                <td className='border-1 text-start px-5 p-3'>Launch Angle</td>
                                <td className='border-1 text-start px-5'>15 - 35 Deg</td>
                            </tr>
                            <tr>
                                <td className='border-1 text-start px-5 p-3'>Indigenous Content</td>
                                <td className='border-1 text-start px-5'>-10 to +50 Deg</td>
                            </tr>
                        </table>
                    </div>
                    <div className="card-body">
                    </div>
                    <div className="card-body">
                      <h1 id='seID' className="card-text scroll_heading">1000</h1>
                        <p className="card-text scroll_heading">Number of Launches </p>
                    </div>
                    <div className="card-body" style={{marginTop:'250px'}}>
                      <h1 id='seID' className="card-text scroll_heading">Features</h1>
                      <ul className="card-text scroll_heading">
                        <li>Configurable Tube for Various Diameter of UVAs upto 210 mm ID</li>
                        <li>Man Portable with cammmo bag</li>
                        <li>Recoil reduction elastomers</li>
                        <li>Sensor to shooter Integration Capable</li>
                        <li>ATWAD TM system for foldable propellers of UAV</li>

                        </ul>                        </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card border-0 px-5 mt-4">
                    <img src={tubeLauncher} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                </div>
                <div className="card border-0 px-5 mt-4">
                    <img style={{width:'500px'}} src={tubeLauncher1} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                </div>
                <div className="card border-0 px-5 mt-4">
                    <img style={{width:'500px'}} src={tubeLauncher2} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                </div>
            </div>
        </div>
    </div>
);
}


export default TubeLauncher
