import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../home/index';
import Login from '../login/index';

const Layout = () => {

  // if (!userStore.user) {
  if (true) {
    return <Login />;
  }

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
