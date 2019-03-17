import React, { Component } from 'react';
import Header from './components/layouts/Header';
import './App.css';
import Calendar from './components/layouts/Calendar';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <Calendar />
      <Footer />
      </div>
    );
  }
}

export default App;
