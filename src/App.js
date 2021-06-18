import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { NamesA, NamesB, NamesC, NamesD } from "../data/initialNames";
import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import BrTable from './components/BrTable';
import { useEffect } from 'react';


function App() {
  //add local storage
  useEffect(() => {
    if (localStorage.getItem('brygadaa') == null) {
      localStorage.setItem('brygadaa', NamesA)
    }
    if (localStorage.getItem('brygadab') == null) {
      localStorage.setItem('brygadab', NamesB)
    }
    if (localStorage.getItem('brygadac') == null) {
      localStorage.setItem('brygadac', NamesC)
    }
    if (localStorage.getItem('brygadad') == null) {
      localStorage.setItem('brygadad', NamesD)
    }
    
  }, []);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/table" exact component={BrTable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
