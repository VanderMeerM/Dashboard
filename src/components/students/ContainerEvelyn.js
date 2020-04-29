import React, {Component} from "react";
import Chart from "../ChartAllStudents"
//import chartEveryStudent from "./ChartEveryStudent"
import students from "../Mockdata"
import { Link } from 'react-router-dom';

class PageEvelyn extends React.Component {

  render() 
  
  {
    const allTasks = students.map(task => task.Opdracht)
    const distinctTasks = [...new Set(allTasks)];

    const taskAverages = [];
    distinctTasks.forEach((task) => {
      const likesTask = students.filter(
        (like) => like.Opdracht === task && like.Naam === "Evelyn"
      );

const diffTotal = likesTask.map(function(diff) {
 return diff.Moeilijk}).reduce(function(prev,next) {return prev+next})

 const likeTotal = likesTask.map(function(diff) {
 return diff.Leuk}).reduce(function(prev,next) {return prev+next})  

   taskAverages.push({
    task: task,
    diffAverage: diffTotal / likesTask.length,
    likeAverage: likeTotal / likesTask.length,
  });
});

const linkStyle = {
  color: 'black',
  fontFamily: 'Verdana',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderStyle: 'solid',
  backgroundColor: 'yellow',
  borderWidth: '4px',
  borderColor: 'red',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
};

    return (
      <div>
        
        <h2> Gemiddelde beoordeling van Evelyn</h2>
        <Chart data={taskAverages} />
        <p></p>
        <Link style={linkStyle} to="/">Terug naar beoordeling van iedereen</Link>
                       
      </div>
    );
  }
}
export default PageEvelyn;





