import React, { Component } from 'react';
import Header from './components/layouts/Header';
import './App.css';
import Calendar from './components/layouts/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <Calendar />
      </div>
    );
  }
}

export default App;
