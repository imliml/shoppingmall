import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./CabinProduct.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditionProduct = ({ secondImg, img, name, price }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [heartOver, setHeartOver] = useState(false);

  const handleMouseOver = () => {};

  return (
    <li className="CabinLimited">
      <div className="LimitedThumb">
        <div className="LimitedBody">
          <a href=" " className="ProductLink">
            <div className="ProductImage">
              <img
                src={isMouseOver ? secondImg : img}
                className="LimitedImage"
                onMouseEnter={handleMouseOver}
                onMouseOut={() => {
                  setIsMouseOver: false;
                }}
                alt=""
              />
            </div>
            <div className="ProductCat">DIOR AND RIMOWA</div>
            <div className="ProductRyme">{name}</div>
          </a>
          <div className="ProductPrice">
            <span>{price} $</span>
          </div>
          <div className="ProductPromo" />
        </div>
        <div className="LimitedWish">
          <FontAwesomeIcon icon={faHeart} onMouseEnter={handleMouseOver} />
        </div>
        <div className="ProductSwatch">
          <ul className="SwatchList">
            <li className="SwatchBlack" onMouseEnter={handleMouseOver}>
              <a href=" ">
                <img
                  src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw970d1792/images/swatch/dior_black.png"
                  className="SwatchImage"
                  alt=""
                ></img>
              </a>
            </li>
            <li className="SwatchSilver">
              <a href=" ">
                <img
                  src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw34e11479/images/swatch/dior_silver.png"
                  className="SwatchImage"
                  alt=""
                ></img>
              </a>
            </li>
            <li className="SwatchBlue">
              <a href=" ">
                <img
                  src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwc0102692/images/swatch/gradient_blue.png"
                  className="SwatchImage"
                  alt=""
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="ProductBadge">
          <div className="IconTag"></div>
          <div className="TagName">LIMITED EDITION</div>
        </div>
      </div>
    </li>
  );
};

export default withRouter(EditionProduct);
