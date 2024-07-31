import React, { useState, useRef, useEffect } from 'react';
import './DeliveryBungee.css';

const products = [
  {
    id: 1,
    name: 'Bungee Catapult Launcher - YPJ 30',
    weight: '30 kgs / 30m/s',
    gLoad: '5Gs',
    velocity: '72 kgs',
    angle: '15 - 35 Deg',
    temperature: '75 %',
    image: './src/assets/2 (1).png',
    features: [
      'High durability',
      'Easy to use',
      'Lightweight design',
      'Customizable options'
    ]
  },
  {
    id: 2,
    name: 'Bungee Catapult Launcher - YPJ 30',
    weight: '30 kgs / 30m/s',
    gLoad: '5Gs',
    velocity: '72 kgs',
    angle: '15 - 35 Deg',
    temperature: '75 %',
    image: './src/assets/YPJ 30 Bungee Catapult Launcher.png',
    features: [
      'High durability',
      'Easy to use',
      'Lightweight design',
      'Customizable options'
    ]
  },
  {
    id: 2,
    name: 'Bungee Catapult Launcher - YPJ 30',
    weight: '30 kgs / 30m/s',
    gLoad: '5Gs',
    velocity: '72 kgs',
    angle: '15 - 35 Deg',
    temperature: '75 %',
    image: './src/assets/YPJ 30 Bungee Catapult Launcher.png',
    features: [
      'High durability',
      'Easy to use',
      'Lightweight design',
      'Customizable options'
    ]
  },
];

function App() {
  const [currentProductIndex, setCurrentProductIndex] = useState(-1);
  const contentRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      if (prevIndex === -1) {
        return 0; // Go to product details on the first scroll
      } else if (prevIndex === 0) {
        return 1; // Go to product features on the second scroll
      } else {
        return -1; // Loop back to initial state
      }
    });
    // Smooth scroll to top when product changes
    contentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePreviousProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      if (prevIndex === 0) {
        return -1; // Return to initial state
      } else if (prevIndex === 1) {
        return 0; // Go back to product details
      } else {
        return -1; // Loop back to initial state
      }
    });
    // Smooth scroll to top when product changes
    contentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = (event) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const contentElement = contentRef.current;
      const scrollThreshold = 50; // Adjust the threshold as needed

      if (contentElement.scrollTop === 0 && event.deltaY < -scrollThreshold) {
        handlePreviousProduct();
      } else if (contentElement.scrollHeight - contentElement.scrollTop <= contentElement.clientHeight && event.deltaY > scrollThreshold) {
        handleNextProduct();
      }
    }, ); // Increase the delay to slow down the scroll speed
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    contentElement.addEventListener('wheel', handleScroll);

    return () => {
      contentElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const currentProduct = currentProductIndex === -1 ? null : products[currentProductIndex];

  return (
    <div className="App">
      <div className="content text-black" ref={contentRef}>
        <div className="product-container">
          {currentProductIndex === -1 ? (
            <div className="initial-table">
              <h1>Bungee Catapult Launcher - YPJ 30</h1>
              <p>This Custom Off The Shelf Launcher can be used to launch up to 30 kgs of Fixed Wing UAVs</p>
              <table>
                <tbody>
                  <tr>
                    <td>Maximum Aircraft Weight &amp; Corresponding Max Velocity</td>
                    <td>30 kgs / 30m/s</td>
                  </tr>
                  <tr>
                    <td>G load on aircraft</td>
                    <td>5Gs</td>
                  </tr>
                  <tr>
                    <td>Launcher Weight</td>
                    <td>72 kgs</td>
                  </tr>
                  <tr>
                    <td>Launch Angle</td>
                    <td>15 - 35 Deg</td>
                  </tr>
                  <tr>
                    <td>Indigenous Content</td>
                    <td>75 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : currentProductIndex === 0 ? (
            <div className="product-details">
              <h1>100</h1>
              <p>Launches per bungee</p>
            </div>
          ) : (
            <div className="product-features">
              <h2>Product Features</h2>
              <ul>
                {currentProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="product-image">
            <img 
              src={currentProductIndex === -1 ? products[0].image : products[1].image} 
              alt={currentProductIndex === -1 ? "Initial Product" : "Scrolled Product"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;