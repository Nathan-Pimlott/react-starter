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
import Header from './header';
import AuthStore from '../../stores/auth';
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    marginTop: 70,
    width: '-webkit-fill-available'
  }
});

const Layout = () => {
  const classes = styles();

  const authStore = useContext(AuthStore);

  if (!authStore.user.email) {
    return <Login />;
  }

  return (
    <React.Fragment>

      <Header />

      <div 
        className={classes.root}
      >
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
      </div>
    </React.Fragment>
  );
}

export default observer(
  Layout
);
