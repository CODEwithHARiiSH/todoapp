import React, { Component } from 'react';
import './App.css';
import Task from "./components/Task.js";
import TaskList from "./components/TaskList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Task />
      <TaskList />
      </div>
    );
  }
}

export default App;
