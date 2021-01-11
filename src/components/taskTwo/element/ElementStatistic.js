import React from 'react'


const ElementStatistick = ({stat}) => {
  return (
    <li className="item" id={stat.id}>
    <span className="label">{stat.label}:    </span>
    <br/><span className="percentage">  {stat.percentage}</span>
  </li>
    );
};

export default ElementStatistick;