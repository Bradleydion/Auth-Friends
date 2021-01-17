import Login from './components/login'
import './App.css';
import AddFriend from './components/addFriend';
import Friend from './components/Friends';

function App() {
  return (
    <div className="App">
      <Login/>
      <AddFriend/>
      <Friend/>
    </div>
  );
}

export default App;
