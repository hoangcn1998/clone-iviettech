import React from 'react';
import IntroContent from './IntroContent/IntroContent';
import SupportLive from './SupportLive/SupportLive';
import "./style.css";
import img from "../../../assests/images/img-intro.jpeg";
import logo from "../../../assests/images/logo-header.png";
import supportLiveImage from "../../../assests/images/support-live-image.jpeg";
import imageHeadSupportLive from "../../../assests/images/image-head-support-live.jpeg";

function Introduce(props) {
  return (
    <div className="introduce">
      <div className="introduce__content">
        <IntroContent img={img} logo={logo} title="Giới Thiệu!" desc="Trải qua nhiều năm làm việc trong ngành phần mềm, hiểu được thực trạng nhu cầu nhân lực của ngành, nhóm chuyên gia trong ngành đã thành lập Trung tâm đào tạo Lập trình viên chuyên nghiệp iVietTech với mong muốn thu hẹp khoảng cách giữa nhà trường và doanh nghiệp, tạo cơ hội việc làm cho các bạn trẻ đã, đang và sẽ theo học ngành CNTT." />
      </div>
      <div className="introduce__support">
        <SupportLive image={supportLiveImage} imageSupport={imageHeadSupportLive} />
      </div>
    </div>
  );
}

export default Introduce;