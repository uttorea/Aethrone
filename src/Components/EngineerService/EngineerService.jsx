import React from 'react';
import './EngineerService.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import EngineerServiceIMG from './EngineerServiceIMG';
import SimpleCard from '../SimpleCards/SimpleCard';

const EngineerService = () => {
    return (
        <div className='Engineering-Service mt-5'>
            <div className='ms-2 ms-md-0'>
                <Heading heading='Engineering Service '/>
            </div>
            <p className=' ms-2 ms-md-0 fontsecondry'>Our leadership comes from a background of physics based simulation with ability to work with a wide range of materials including metals, composites, elastomers, technical textiles and plastics.</p>
            <SimpleCard images={EngineerServiceIMG}  cardHeight='248.25px' cardWidth='191.25px'/>
            <p className="mt-3  ms-2 ms-md-0 fontsecondry">Technology lies at the core of sustainable progress. Aethrone Aerospace's sustainable transformation initiatives are anchored in the strategic adoption of five cutting-edge technologies. Each of these technologies is adept at delivering distinct business outcomes both presently and in the long term. Through our emphasis on these technologies, we guarantee coherence throughout our portfolio and offer the versatility needed to address varied business hurdles across industry sectors.</p>
        </div>
    );
}

export default EngineerService;