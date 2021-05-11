import React from "react";
import "./style.css";

function Calender(props) {
  const { image, title, date, calender } = props;

  return (
    <div className="calender">
      <img src={image} alt={title} className="calender__image" />
      <div className="calender-group">
        <p className="calender-group__title">{title}</p>
        <p className="calender-group__date">Ngày khai giảng: {date}</p>
        <p className="calender-group__calender">Lịch học: {calender}</p>
      </div>
    </div>
  )
}

export default Calender;