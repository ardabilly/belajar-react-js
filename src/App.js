import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function home(){
  return <h2>ini Home</h2>
}
function listView(){
  return (
    <div>
       <h2>semua user</h2>
       <ul>
         <a href="user/hilman">Hilman</a> <br/>
         <a href="user/andreas">Andreas</a>
       </ul>
    </div>
  )
}
function noMatch(){
  return <h2>404 jodoh not found</h2>
}

function DetailView({match}){
  return <h2>ini halaman {match.params.name}</h2>
}

class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/users">User</a></li>
          </nav>

          <main>
            <Switch>
              <Route path="/" exact component={home} />
              <Route path="/users" exact component={listView} />
              <Route path="/user/:name" exact component={DetailView} />
              <Route  component={noMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
