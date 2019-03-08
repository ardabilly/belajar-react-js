import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      // </div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
