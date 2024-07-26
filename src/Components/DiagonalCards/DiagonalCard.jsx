import React, { useState, useEffect } from "react";
import "./DiagonalCard.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const DiagonalCard = ({
  cards,
  separatorTop1 = "230px",
  separatorTop2 = "250px",
  d_cardTop = "280px",
  smallSeparatorTop1 = "120px",
  smallSeparatorTop2 = "130px",
  smallCardTop = "150px"
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the gap class based on the number of cards and window width
  const gapClass = windowWidth < 425 ? "gap-1" : (cards.length === 4 ? "gap-5" : "gap-3");

  return (
    <div className={`mt-3 mt-md-5 d-flex ${gapClass} daigonal_container`}>
      {cards.map((card, index) => (
        <div key={index} className="d_card rounded">
          <div
            className="d_card_img_container"
            style={{ marginTop: card.marginTop, marginLeft: card.marginLeft }}
          >
            <img
              src={card.image}
              className="d_card_img"
              alt={`Card image ${index + 1}`}
              style={{ width: card.width, height: card.height }}
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
              <ul className="d_card-list mt-3">
                {card.text.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="d_card-text fontweight fontfamilySecondary">
                {card.text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagonalCard;
