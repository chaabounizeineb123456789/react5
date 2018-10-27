import React, { Component } from 'react';
import logo from './wolf.jpg';
import './App.css';
import Box from './components/box2'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header><h1>notre equipe</h1></header>
        <div className="log">
          <Box className="wol" name="wolf1" para="founder"  demo="ceo" />
          <Box className="wol" name="wolf2" para="founder" demo="coo"/>
          <Box className="wol" name="wolf3" para="software engineer" demo="part time "/>
          <Box className="wol" name="wolf4" para="full time program" demo="manager"/>
        </div>
      </div>
    )
  }
}

export default App;
