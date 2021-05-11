import React from 'react';
import Banner from './Banner/Banner';
import Education from './Education/Education';
import Introduce from './Introduce/Introduce';
import Schooling from './Schooling/Schooling';

function Semantic(props) {
  return (
    <div className="Semantic">
      <Banner />
      <Education />
      <Introduce />
      <Schooling />
    </div>
  );
}

export default Semantic;