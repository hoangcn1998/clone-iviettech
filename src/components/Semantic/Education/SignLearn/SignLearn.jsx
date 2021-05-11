import React from 'react';
import "./style.css";

function SignLearn(props) {
  return (
    <div className="signlearn">
      <form className="signlearn__form">
        <div className="signlear--group">
          <i className="fa fa-pencil signlearn__form--icon"></i>
          <p className="signlearn__form--title">ĐĂNG KÝ HỌC</p>
        </div>
        <div className="signlearn__form--line">---------------------------------------------------------------------------------------------------------------------------------------</div>
        <input type="text" name="" className="signlearn__form--fullname" placeholder="Họ và tên" />
        <input type="email" name="" className="signlearn__form--email" placeholder="Email" />
        <input type="text" name="" className="signlearn__form--phone" placeholder="Điện thoại" />
        <select className="sign__form--course">
          <option value="0">Chọn khóa học</option>
          <option value="1">Lập trình Android</option>
          <option value="2">Lập trình IOS-Swift</option>
          <option value="3">Lập trình PHP - MySQL</option>
          <option value="4">Lập trình Front End</option>
          <option value="5">Kiểm thử chuyên nghiệp</option>
          <option value="6">Lập trình Java từ A - Z</option>
          <option value="7">Lập trình .Net từ A - Z</option>
          <option value="8">Lập trình viên chuyên nghiệp</option>
          <option value="9">----------------------------</option>
          <option value="10">Lập trình cơ bản</option>
          <option value="11">Lập trình cấp tốc</option>
          <option value="12">Kỹ sư cầu nối</option>
        </select>
        <input type="text" className="signlearn__form--mess" placeholder="Lời nhắn của bạn" />
        <button type="submit" className="btn btn--primary">ĐĂNG KÝ HỌC</button>
      </form>
    </div>
  );
}

export default SignLearn;