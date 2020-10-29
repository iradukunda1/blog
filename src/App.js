import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import routes from "../src/router/routes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </div>

  );
}

export default App;
