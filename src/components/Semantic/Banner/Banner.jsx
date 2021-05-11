import React from 'react';
import "./style.css";
import banner from "../../../assests/images/banner.jpeg";

function Banner(props) {
  return (
    <div className="banner">
      <img src={banner} alt="" className="banner__img" />
      <div className="banner__group">
        <div className="banner__group--next"> &lt;</div>
        <div className="banner__group--prev">&gt;</div>
      </div>
    </div>
  );
}

export default Banner;