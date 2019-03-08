import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Clicker(){

  function handleClick(e){
    alert('berhasil mengclick');
    e.preventDefault();
  }

  return(
    <a href="#" onClick={handleClick}>Klik disini bro</a>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clicker />
        </header>
      </div>
    );
  }
}

export default App;
