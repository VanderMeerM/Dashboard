import React, {Component} from "react";
import ChartAllStudents from "./ChartAllStudents"
import students from "./Mockdata"
import { Link } from 'react-router-dom';


class Container extends Component {
  
    constructor(props) {
      super(props)
      this.state = {      
        students, 
      };
       }
    render()  
    
    {   

         
const allTasks = this.state.students.map(task => task.Opdracht)
const uniqueTasks = [...new Set(allTasks)];

const taskAverages = [];
uniqueTasks.forEach((task) => {
  const likesTask = students.filter(
    (like) => like.Opdracht === task 
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
    textDecoration: 'none',
    backgroundColor: 'yellow',
    marginLeft: '20px',
    padding: '10px',
    border: '2px', 
    display: 'inline',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: 'red',
    fontWeight: 'bold'
  };
  
            
      return (
          <div>
            <input type="checkbox"  value="checkedall" />Moeilijk<p></p>
            <input type="checkbox"  value="checkedall" />Leuk
            <h2>Gemiddelde beoordeling van alle studenten</h2>
                <ChartAllStudents 
                data={taskAverages} 
                tasks={uniqueTasks}/>
                <p></p>
                Ga naar beoordeling van: 
                <Link style={linkStyle} to="/Evelyn">Evelyn
                </Link>
                <Link style={linkStyle} to="/Aranka">Aranka
                </Link>
                <Link style={linkStyle} to="/Floris">Floris
                </Link>
                <Link style={linkStyle} to="/Hector">Hector
                </Link>
                <Link style={linkStyle} to="/Martina">Martina
                </Link>
                <Link style={linkStyle} to="/Maurits">Maurits
                </Link>
                <Link style={linkStyle} to="/Rahima">Rahima
                </Link>
                <Link style={linkStyle} to="/Sandra">Sandra
                </Link>
                <Link style={linkStyle} to="/Storm">Storm
                </Link>
                <Link style={linkStyle} to="/Wietske">Wietske
                </Link>
            
          </div>
      )

    };
}
      
export default Container