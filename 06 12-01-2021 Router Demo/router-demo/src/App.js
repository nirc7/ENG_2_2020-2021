
import { Switch, Route, withRouter, Link } from 'react-router-dom';

import './App.css';
import CCAbout from './Class Components/CCAbout';
import CCHome from './Class Components/CCHome';
import CCStudent from './Class Components/CCStudent';
import CCSync from './Class Components/CCSync';

function App() {
  return (
    <div className="App">
      <div style={{margin:15}}>
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/student/7">Student</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/sync">Sync</Link>
      </div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" >
            <CCHome />
          </Route>
          <Route path="/student/:userId" component={CCStudent} />
          <Route path="/about">
            <CCAbout />
          </Route>
          <Route path="/sync" >
            <CCSync />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default withRouter(App);
