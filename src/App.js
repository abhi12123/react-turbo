import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Header title="Simple Firebase App" />
          <MessageList />
      </div>
    );
  }
}

export default App;
