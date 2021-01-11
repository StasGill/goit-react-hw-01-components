import React from 'react'
import ElementStatistick from './element/ElementStatistic.js'




const TaskTwo = ({statistic}) => {
    
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
      {
          statistic.map( stat => <ElementStatistick stat={stat}/>) 
      }
    
  </ul>
</section>
  );
};

export default TaskTwo;

// <ElementSt stat={stat}/>