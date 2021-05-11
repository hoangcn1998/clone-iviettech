import React from 'react';
import "./style.css"
import logo from "../../assests/images/logo-header.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo--image" />
      </div>
      <ul className="header__list">
        <div>
          <li className="header__list--item active">Trang chủ</li>
        </div>
        <div>
          <li className="header__list--item">Các khóa học lập trình</li>
        </div>
        <div>
          <li className="header__list--item">Đăng ký học</li>
        </div>
        <div>
          <li className="header__list--item">Việc làm</li>
        </div>
        <div>
          <li className="header__list--item">iViettech</li>
        </div>
        <div>
          <li className="header__list--item">Trang vàng HV</li>
        </div>
        <div>
          <li className="header__list--item">Blog</li>
        </div>
        <div>
          <li className="header__list--item">Font-awsome</li>
        </div>
      </ul>
    </div>
  );
}

export default Header;