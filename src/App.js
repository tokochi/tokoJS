import './App.css';
import SideBar from './components/Sidebar';
import React from 'react'
import Toolbar from './components/Toolbar'
import { Route } from 'react-router-dom'




function App() {
 
  return (
    <div className="App">
      <Route path="/t" component={Toolbar}/>
      <Route path="/" exact component={SideBar}/>      
      <Route path="/go" exact component={Godot}/>      
    </div>
  );
}

export default App;
