import React, { useEffect, useState } from 'react';
import './SimpleCard.css';

const SimpleCard = ({
    images,
    cardHeight = '248.25px',
    cardWidth = '191.25px',
    responsiveCardHeights = {},
    responsiveCardWidths = {},
    imgHeights = {},
    imgWidths = {},
    responsiveImgHeights = {},
    responsiveImgWidths = {}
}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getResponsiveStyle = (index) => {
        const cardHeightValue = windowWidth <= 425 ? responsiveCardHeights[index] || cardHeight : cardHeight;
        const cardWidthValue = windowWidth <= 425 ? responsiveCardWidths[index] || cardWidth : cardWidth;
        const imgHeightValue = windowWidth <= 425 ? responsiveImgHeights[index] || imgHeights[index] : imgHeights[index];
        const imgWidthValue = windowWidth <= 425 ? responsiveImgWidths[index] || imgWidths[index] : imgWidths[index];

        return {
            cardHeight: cardHeightValue,
            cardWidth: cardWidthValue,
            imgHeight: imgHeightValue || `calc(${cardHeightValue} - 63.25px)`,
            imgWidth: imgWidthValue || '100%',
        };
    };

    return (
        <div className="card-container gap-1 gap-md-5">
            {images.map((card, index) => {
                const { cardHeight, cardWidth, imgHeight, imgWidth } = getResponsiveStyle(index);
                return (
                    <div className="engineer_card" key={index} style={{ height: cardHeight, width: cardWidth }}>
                        <div className="eng-card rounded-2 mb-3" style={{ height: '100%', width: '100%' }}>
                            <div className="card-body1 no-padding d-flex justify-content-center align-items-center" style={{ height: `calc(${cardHeight} - 63.25px)`, width: '100%' }}>
                                <img src={card.img} className="card_img1 rounded-top" alt={card.alt} style={{ height: imgHeight, width: imgWidth }} />
                            </div>
                            <div className="card-footer eng-para2 fontsecondry text-center fontfamilySecondary fw-bold maincolor">{card.footer}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SimpleCard;
