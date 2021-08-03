import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './components/AddEvent/AddEvent';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvent">Add Event</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/dashboard">

          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
