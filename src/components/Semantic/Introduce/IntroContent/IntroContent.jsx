import React from 'react';
import "./style.css";

function IntroContent(props) {
  const { img, logo, title, desc } = props;

  return (
    <div className="intro-content">
      <div className="intro-content__left">
        <img src={img} alt="" className="intro-content__left--img" />
      </div>
      <div className="intro-content__right">
        <img src={logo} alt="" className="intro-content__right--logo" />
        <div className="intro-content__right--line"></div>
        <h2 className="intro-content__right--title">{title}</h2>
        <p className="intro-content__right--desc">{desc}</p>
        <button className="intro-content__right--btn">Xem thêm</button>
      </div>
    </div>
  );
}

export default IntroContent;