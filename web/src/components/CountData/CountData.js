import React from 'react';
import './../../assets/scss/components/usercount.scss';
import chart_img from './../../assets/icons/pie-chart.svg'

function CountData(props) {
  return (
      <div className="container_">
        <h4 className="name">{props.name}</h4>
        <h1 className="percentage">
          {props.percentage}
          <span className="sign">%</span>
        </h1>
      </div>
  );
}

export default CountData;