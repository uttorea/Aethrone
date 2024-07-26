import React from 'react';
import './SimpleCard.css';

const SimpleCard = ({ images, cardHeight = '248.25px', cardWidth = '191.25px' }) => {
    return (
        <div className="card-container gap-1 gap-md-5">
            {images.map((card, index) => (
                <div className="engineer_card" key={index} style={{ height: cardHeight, width: cardWidth }}>
                    <div className="eng-card border-primary border rounded-2 mb-3">
                        <div className="card-body1 no-padding">
                            <img src={card.img} className="card_img1 w-100 rounded-top" alt={card.alt} style={{ height: `calc(${cardHeight} - 63.25px)` }} />
                        </div>
                        <div className="card-footer eng-para2 border-primary border-top maincolor">{card.footer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SimpleCard;