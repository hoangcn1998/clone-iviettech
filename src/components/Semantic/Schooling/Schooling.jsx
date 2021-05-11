import React from "react";
import Calender from "./Calender/Calender";
import "./style.css";
import calender1 from "../../../assests/images/calender-1.png";
import calender2 from "../../../assests/images/calender-2.jpeg";
import calender3 from "../../../assests/images/calender-3.jpeg";
import calender4 from "../../../assests/images/calender-4.jpeg";
import calender5 from "../../../assests/images/calender-5.jpeg";
import calender6 from "../../../assests/images/calender-6.jpeg";
import calender7 from "../../../assests/images/calender-7.png";
import calender8 from "../../../assests/images/calender-8.jpeg";
import course1 from "../../../assests/images/course-1.png";
import course2 from "../../../assests/images/course-2.png";
import course3 from "../../../assests/images/course-3.png";
import course4 from "../../../assests/images/course-4.jpeg";
import Course from "./Course/Course";

const listCalender = [
  { id: 1, image: calender1, title: "Lập trình Front - End", date: "11-05-2021", calender: "Tối 3 - 5 - 7" },
  { id: 2, image: calender2, title: "Kiểm thử phần mềm", date: "11-05-2021", calender: "Tối 3 - 5 - 7" },
  { id: 3, image: calender3, title: "Lập trình viên chuyên nghiệp", date: "18-05-2021", calender: "Tối 3 - 5 - 7" },
  { id: 4, image: calender4, title: "Kỹ sư trí tuệ nhân tạo (AI Eninineer)", date: "07-06-2021", calender: "Tối 2 - 4 - 6" },
  { id: 5, image: calender5, title: "Lập trình Java từ A - Z", date: "11-05-2021", calender: "Tối 3 - 5 - 7" },
  { id: 6, image: calender6, title: "Lập trình web với PHP & Laravel", date: "17-05-2021", calender: "Tối: 2-4-6" },
  { id: 7, image: calender7, title: "DevOps Engineer", date: "24-05-2021", calender: "Tối 2-4-6" },
  { id: 8, image: calender8, title: "Lập trình iOS – Swift", date: "15-06-2021", calender: "Tối 3-5-7" },
];

const listCourses = [
  { id: 1, image: course1, title: "Lập trình cơ bản", date: "17-05-2021", time: "1 tháng", portion: "Tối: 2-4-6" },
  { id: 2, image: course2, title: "Thiết kế đồ họa", date: "11-05-2021", time: "6 tháng", portion: "Tối 3-5-7" },
  { id: 3, image: course3, title: "Thiết kế nội thất", date: "27-04-2021", time: "6 tháng", portion: "Tối 3-5-7" },
  { id: 4, image: course4, title: "Thiết kế UI/UX", date: "11-05-2021", time: "6 tháng", portion: "Tối 3-5-7" },
]

const calenderEle = listCalender.map((item) => (
  <Calender key={item.id} image={item.image} title={item.title} date={item.date} calender={item.calender} />
));

const courseEle = listCourses.map(item => (
  <>
    <Course key={item.id} image={item.image} title={item.title} date={item.date} time={item.time} portion={item.portion} />
    <div className="schooling__course--line"></div>
  </>
))

function Schooling(props) {
  return (
    <div className="schooling-top">
      <div className="schooling-top__main">
        <div className="schooling__top">
          <div>
            <i className="fa fa-calendar schooling__font"></i>
          </div>
          <h2 className="schooling__top--title">LỊCH KHAI GIẢNG</h2>
          <div className="schooling__top-control">
            <i className="fa fa-chevron-left schooling__top-control--prev"></i>
            <div className="schooling__top-control--line"></div>
            <i className="fa fa-chevron-right schooling__top-control--next"></i>
          </div>
        </div>
        <div className="schooling__body">
          <div className="schooling__body--line"></div>
          {calenderEle}
        </div>
      </div>
      <div className="schooling__courses">
        <div className="schooling__courses-header">
          <div>
            <i className="fa fa-pencil-square-o schooling__courses-header--item" ></i>
          </div>
          <h2 className="schooling__courses-header--title">CÁC KHÓA KHÁC</h2>
          <div className="schooling__courses-header--control">
            <i className="fa fa-chevron-left"></i>
            <div className="schooling__courses-header--line"></div>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
        {courseEle}
      </div>
    </div>
  )
}

export default Schooling;