import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to='/login'>Login</Link> </li>
          <li><Link to='/friends'>Friends List</Link></li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
