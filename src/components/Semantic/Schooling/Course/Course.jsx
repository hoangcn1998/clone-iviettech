import React from "react";
import "./style.css";

function Course(props) {
  const { image, title, date, time, portion } = props;

  return (
    <div className="course">
      <img src={image} alt={title} className="course__image" />
      <div className="course__group">
        <p className="course__group--title">{title}</p>
        <p className="course__group--date">Ngày khai giảng: {date}</p>
        <p className="course__group--time">Thời gian: {time}</p>
        <p className="course__group--portion">Suất học: {portion}</p>
      </div>
    </div>
  )
}

export default Course;