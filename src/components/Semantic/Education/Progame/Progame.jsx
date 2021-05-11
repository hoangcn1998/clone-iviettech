import React from 'react';
import ProgameBody from './ProgameBody/ProgameBody';
import ProgameTitle from './ProgameTitle/ProgameTitle';
import "./style.css";

function Progame(props) {
  return (
    <div className="progame">
      <ProgameTitle />
      <div className="progame__line"></div>
      <ProgameBody />
    </div>
  );
}

export default Progame;