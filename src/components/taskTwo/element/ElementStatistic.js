import React from 'react'
import PropTypes from 'prop-types';


const ElementStatistick = ({stat},{key}) => {
    
  return (
    <li className="item" key={key}>
    <span className="label">{stat.label}:    </span>
    <br/><span className="percentage">  {stat.percentage}</span>
  </li>
    );
};

ElementStatistick.propTypes = {
  stat: PropTypes.object,
};

export default ElementStatistick;