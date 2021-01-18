import Login from './components/login'
import React from "react"
import './App.css';
import AddFriend from './components/addFriend';
import Friends from './components/Friends';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
    <ul>
      <li><Link to="./components/login">Log In</Link> 
      </li>
      <li><Link to="./components/addFriend">Add Friend</Link></li>
      <li>Log Out</li>
    </ul>
      </nav>
      <h1>ALL OF THE FRIENDS!!!</h1>
      <Switch>
      <Friends/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
