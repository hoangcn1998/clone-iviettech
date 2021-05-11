import React from 'react';
import "./style.css";

function SupportLive(props) {

  const { image, imageSupport } = props;

  return (
    <div className="support-live">
      <div className="support-live-heading">
        <div>
          <i className="fa fa-comments support-live__font-awsome"></i>
        </div>
        <h2 className="support-live__title">Kết Nối Với Chúng Tôi</h2>
      </div>
      <div className="support-live__line"></div>
      <div className="support-live-body">
        <div className="support-live-transparent"></div>
        <img src={image} alt="" className="support-live__image" />
        <div className="support-live-body-head">
          <img src={imageSupport} alt="imageSupport" />
          <div>
            <p>iVietTech - Trung tâm đ...</p>
            <p>10.096 lượt thích</p>
          </div>
        </div>
        <div className="support-live-body-footer">
          <button><i className="fa fa-facebook-square" aria-hidden="true"></i>
Thích Trang</button>
          <button><i className="fa fa-comments"></i>Gửi tin nhắn</button>
        </div>
      </div>
    </div>
  );
}

export default SupportLive;