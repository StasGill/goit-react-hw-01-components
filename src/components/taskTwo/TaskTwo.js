import React from 'react'
import ElementStatistick from './element/ElementStatistic.js'
import './taskTwoStyle.css'




const TaskTwo = ({statistic}) => {
    
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
      {
          statistic.map( stat => <ElementStatistick stat={stat} key={stat.id}/>) 
      }
    
  </ul>
</section>
  );
};

export default TaskTwo;

// <ElementSt stat={stat}/>