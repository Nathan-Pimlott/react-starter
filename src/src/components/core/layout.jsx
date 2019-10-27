import React, { 
  useContext 
} from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {
  observer 
} from "mobx-react-lite";

import Home from '../home/index';
import Login from '../login/index';
import AuthStore from '../../stores/auth'

const Layout = () => {
  const authStore = useContext(AuthStore)

  if (!authStore.user.email) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route 
          exact 
          path="/"
        >
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default observer(
  Layout
);
