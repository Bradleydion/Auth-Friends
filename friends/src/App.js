import Login from './components/login'
import React from "react"
import './App.css';
import AddFriend from './components/addFriend';
import Friends from './components/Friends';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App(props) {
  const logout = () =>{
    localStorage.removeItem("token");
  };
  return (
    <Router>
    <div className="App">
      <nav>
    <ul>
      <li><Link to="/login">Log In</Link> 
      </li>
      <li><Link to="/addFriend">Add Friend</Link></li>
      <li> 
      < Link onClick={logout}>Logout</Link>
      </li>
    </ul>
      </nav>
      <h1>ALL OF THE FRIENDS!!!</h1>
      <Switch>
        <PrivateRoute exact path= "/protected">
        <Friends/>
        <AddFriend/>
        </PrivateRoute>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
        <Route path="/addFriend" component={AddFriend}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
