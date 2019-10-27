import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../home/index';

const Layout = () => {
  return (
    <Router>
      <Switch>
        
        <Route 
          exact 
          path="/"
        >
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default Layout;
