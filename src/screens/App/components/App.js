import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { RouteWithSubRoutes } from 'shared/components';

import './App.css';
import routes from '../route';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App Component</h1>
        <Navbar />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
