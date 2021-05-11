import React from 'react';
import "./style.css";

function ProgameContent(props) {
  const { image, title, time, portion } = props;

  return (
    <div className="progame-content">
      <div className="progame-content__top">
        <img src={image} alt={title} className="progame-content__top--image" />
        <h2 className="progame-content__top--title">{title}</h2>
        <p className="progame-content__top--time">{time}</p>
        <p className="progame-content__top--protion">{portion}</p>
      </div>
    </div>
  );
}

export default ProgameContent;