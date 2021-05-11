import React from 'react';
import "./style.css";

function ProgameTitle(props) {
  return (
    <div className="progame-title">
      <div className="progame-title__icon"><i className="fa fa-graduation-cap progame-title__icon--item"></i></div>
      <div className="progame-title__text">CHƯƠNG TRÌNH ĐÀO TẠO</div>
      <div className="progame-title__control">
        <i className="fa fa-chevron-left progame-title__control--prev"></i>
        <div className="progame-title__control--line"></div>
        <i className="fa fa-chevron-right progame-title__control--next"></i>
      </div>
    </div>
  );
}

export default ProgameTitle;