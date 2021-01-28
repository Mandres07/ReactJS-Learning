import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// Functional/Stateless component
const App = () => {
   const [courseGoals, setCourseGoals] = React.useState([
      { id: 'cg1', text: 'Finish the course' },
      { id: 'cg2', text: 'Learn all about the course main topic' },
      { id: 'cg3', text: 'Help other students in th Course Q&A' }
   ]);

   const addNewGoalHandler = (newGoal) => {
      // courseGoals.push(newGoal);
      setCourseGoals(prev => {
         return [...prev, newGoal];
      });
   };

   return (
      <div className="course-goals">
         <h2>Course Goals</h2>
         <NewGoal addGoalItem={addNewGoalHandler} />
         <GoalList goals={courseGoals} />
      </div>
   );
};

// Class/State component
// class App extends React.Component {
//    render() {
//       return <h1 title="This works!">A React App!</h1>;
//    }
// }

export default App;
