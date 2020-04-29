import React from 'react';
import './App.css';
import Container from './components/Container'
import  CheckBox  from './components/Checkbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageEvelyn from "./components/students/ContainerEvelyn"
import PageAranka from "./components/students/ContainerAranka";
import PageFloris from "./components/students/ContainerFloris";
import PageHector from "./components/students/ContainerHector";
import PageMartina from "./components/students/ContainerMartina";
import PageMaurits from "./components/students/ContainerMaurits";
import PageRahima from "./components/students/ContainerRahima";
import PageSandra from "./components/students/ContainerSandra";
import PageWietske from "./components/students/ContainerWietske";
import PageStorm from "./components/students/ContainerStorm";


function App() {
  return (
    <div>
        <Router>
       <Switch>
        <Container path="/" exact component={Container} />
       <Route path="/Evelyn" component={PageEvelyn} />
       <Route path="/Aranka" component={PageAranka} />
       <Route path="/Floris" component={PageFloris} />
       <Route path="/Hector" component={PageHector} />
       <Route path="/Martina" component={PageMartina} />
       <Route path="/Maurits" component={PageMaurits} />
       <Route path="/Rahima" component={PageRahima} />
       <Route path="/Sandra" component={PageSandra} />
       <Route path="/Storm" component={PageStorm} />
       <Route path="/Wietske" component={PageWietske} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
