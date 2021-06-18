import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import BrTable from './components/BrTable';


function App() {
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
