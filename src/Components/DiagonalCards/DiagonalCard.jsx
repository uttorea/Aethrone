import React, { useState, useEffect } from "react";
import "./DiagonalCard.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const DiagonalCard = ({
  cards,
  separatorTop1 = "230px",
  separatorTop2 = "240px",
  d_cardTop = "270px",
  smallSeparatorTop1 = "120px",
  smallSeparatorTop2 = "130px",
  smallCardTop = "150px",
  defaultCardWidth = "349.5px",
  defaultCardHeight = "453px",
  smallCardWidth = "110px",
  smallCardHeight = "200px",
  isLargeSize = false,
  centerText = false,
  bgColor = "transparent"
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(defaultCardWidth);
  const [cardHeight, setCardHeight] = useState(defaultCardHeight);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width < 425) {
        setCardWidth(smallCardWidth);
        setCardHeight(smallCardHeight);
      } else {
        setCardWidth(defaultCardWidth);
        setCardHeight(defaultCardHeight);
      }
    };

    handleResize(); // Call it once to set initial values
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultCardWidth, defaultCardHeight, smallCardWidth, smallCardHeight]);

  const gapClass = windowWidth < 425 ? "gap-1" : (cards.length === 5 ? "gap-3" : "gap-5");

  return (
    <div className={`mt-3 mt-md-5 d-flex ${gapClass} daigonal_container`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="d_card rounded"
          style={{ 
            width: cardWidth, 
            height: cardHeight,
            backgroundColor: bgColor
          }}
        >
          <div
            className="d_card_img_container"
            style={{
              marginTop: windowWidth < 425 ? card.smallMarginTop : card.marginTop,
              marginLeft: windowWidth < 425 ? card.smallMarginLeft : card.marginLeft
            }}
          >
            <img
              src={card.image}
              className="d_card_img"
              alt={`Card image ${index + 1}`}
              style={{
                width: windowWidth < 425 ? card.smallWidth : card.width,
                height: windowWidth < 425 ? card.smallHeight : card.height
              }}
            />
          </div>
          <div
            className="dseperator1"
            style={{
              top: windowWidth < 425 ? smallSeparatorTop1 : separatorTop1,
            }}
          ></div>
          <div
            className="dseperator"
            style={{
              top: windowWidth < 425 ? smallSeparatorTop2 : separatorTop2,
            }}
          ></div>
          <div
            className="dcard-body"
            style={{ top: windowWidth < 425 ? smallCardTop : d_cardTop }}
          >
            <h5 className="d_card-title fontfamilyPrimary fontweight maincolor ms-1 ms-md-3">
              {card.title}
            </h5>
            {Array.isArray(card.text) ? (
              <ul className="d_card-list mt-3 mt-md-4 py-1 ps-3 ps-md-5">
                {card.text.map((item, idx) => (
                  <li key={idx} className="mb-0 mb-md-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : card.text ? (
              <p className={`d_card-text fontsecondry fontweight fontfamilySecondary ${centerText ? 'text-center' : ''}`}>
                {card.text}
              </p>
            ) : null}
            {card.extraText && (
              <p className="d_card-extra-text py-md-2 py-0 maincolor fw-bold text-center fontsecondry fontfamilySecondary px-2">
                {card.extraText} <i className="bi bi-arrow-right-short"></i>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagonalCard;
