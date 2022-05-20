import './App.css';
import ParadeList from './Parade/ParadeList';
import OpenSign from './OpenSign/OpenSign';
import EatingCompetition from './EatingCompetition/EatingCompetition';
import Admin from './Admin';

import {
  BrowserRouter as Router, 
  Route,
  Link,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path ='/'>
        <div className="App">
          <header className="App-header">
            <Link to='/admin'>Admin</Link>
          </header>
          <OpenSign />
          <EatingCompetition />
          <ParadeList />
        </div>
      </Route>
      <Route exact path ='/admin'>
        <Admin/>
      </Route>
    </Router>
  );
}

export default App;
