import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import User from './components/users/User';

class App extends Component {

  render(){
    return (
      <div className="App">
          <Navbar title = 'Github Finderr' icons = 'fab fa-github' />
          <div className = 'container'>
          <User />
          </div>
      </div>
    );

  }

}

export default App;
