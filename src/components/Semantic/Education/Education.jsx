import React from 'react';
import Progame from './Progame/Progame';
import SignLearn from './SignLearn/SignLearn';
import "./style.css";

function Education(props) {
  return (
    <div className="education">
      <div className="education__signlearn">
        <SignLearn />
      </div>
      <div className="education__progame">
        <Progame />
      </div>
    </div>
  );
}

export default Education;