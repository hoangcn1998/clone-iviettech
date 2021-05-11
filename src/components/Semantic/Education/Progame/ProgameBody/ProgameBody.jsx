import React from 'react';
import ProgameContent from './ProgameContent/ProgameContent';
import image1 from "../../../../../assests/images/image-progame-1.jpeg";
import image2 from "../../../../../assests/images/image-progame-2.png";
import image3 from "../../../../../assests/images/image-progame-3.jpeg";
import image4 from "../../../../../assests/images/image-progame-4.jpeg";
import "./style.css";

const courses = [
  { id: 1, image: image1, title: "Lập Trình Java Từ A-Z", time: "Thời gian: 6 tháng", portion: "Suất học: Tối 3-5-7" },
  { id: 2, image: image2, title: "Lập Trình ForntEnd-New", time: "Thời gian: 5 tháng", portion: "Suất học: Tối 2-4-6" },
  { id: 3, image: image3, title: "Lập Trình PHP & Laravel", time: "Thời gian: 6 tháng", portion: "Suất học: Tối 2-4-6" },
  { id: 4, image: image4, title: "Lập Trình Viên Chuyên Nghiệp", time: "Thời gian: 8 tháng", portion: "Suất học: Tối 3-5-7" },
]

const courseEle = courses.map((course, index) => (
  <ProgameContent key={index} image={course.image} title={course.title} time={course.time} portion={course.portion} />
));

function ProgameBody(props) {
  return (
    <div className="progame-body">
      {courseEle}
    </div>
  );
}

export default ProgameBody;