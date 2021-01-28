import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = ({ addGoalItem }) => {
   const [enteredText, setEnteredText] = useState('');

   const addGoalHandler = event => {
      event.preventDefault(); // evita que el navegador ejecute lo que normalmente sucede con el submit de un form
      if (enteredText !== '') {
         const newGoal = {
            id: Math.random().toString(),
            text: enteredText
         };
         addGoalItem(newGoal);
         setEnteredText('');
      }
   };

   const textChangeHandler = event => {
      setEnteredText(event.target.value);
   };

   return (
      <form className="new-goal" onSubmit={addGoalHandler}>
         <input type='text' value={enteredText} onChange={textChangeHandler} />
         <button type='submit'>Add Goal</button>
      </form>
   );
};

export default NewGoal;