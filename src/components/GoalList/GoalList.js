import React from 'react';
import './GoalList.css';

const GoalList = ({ goals }) => {
   return (
      <ul className="goal-list">
         {goals.map(({ id, text }) => {
            return <li key={id}>{text}</li>;
         })}
      </ul>
   );
};

export default GoalList;