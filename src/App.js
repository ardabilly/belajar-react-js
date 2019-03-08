import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Toggle extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggleStatus: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state=> ({
      toggleStatus: !state.toggleStatus
    }))
  }
  
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
      </button>
      <p>Kondisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>

      </div>
      
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
