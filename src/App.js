import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends Component{
  constructor(props){
    super(props)
      this.state = {
        time: props.time
    }
  }


  // lifecycle
  componentDidMount(){
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    // update set time setiap detik
    this.setState((state,props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>{this.state.time} detik</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer time="0"/>
          <Timer time="5"/>
        </header>
      </div>
    );
  }
}

export default App;
