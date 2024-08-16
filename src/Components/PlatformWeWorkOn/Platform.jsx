import React from 'react';
import './Platform.css';
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import LifeCycle from '../../Components/LifeCycle/LifeCycle';
import DiagonalCard from '../DiagonalCards/DiagonalCard';
import platformIMg from '../PlatformWeWorkOn/PlatformIMG'

const Platform = () => {
  return (
    <>
      <div className="paltform-container mt-5 ">
        <div className='ms-0 ms-md-0'>

        <Heading heading='Platforms We Work On'/>
        </div>
        <DiagonalCard cards={platformIMg}/>
      </div>
      <LifeCycle />
    </>
  );
}

export default Platform;
