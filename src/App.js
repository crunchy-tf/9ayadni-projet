import React, { Component } from 'react';
import './App.css';
import Calendar from "./components/Calendar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>9AYADNI</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;
