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
import { 
  Typography, 
  AppBar, 
  Toolbar,
  Button,
  makeStyles,
  Tooltip
} from "@material-ui/core";
import { 
  ExitToApp 
} from "@material-ui/icons";

import AuthStore from '../../stores/auth'

const styles = makeStyles({
  logoutButton: {
    position: 'fixed',
    right: 0,
    color: 'white'
  }
})

const Header = () => {
  const classes = styles();

  const authStore = useContext(AuthStore)

  return (
    <AppBar>
      <Toolbar>

        <Typography>
          React Starter
        </Typography>

        <Tooltip 
          title='Logout'
        >
          <Button
            onClick={() => {
              authStore.logout();
            }}
            className={classes.logoutButton}
          >
            <ExitToApp />
          </Button>
        </Tooltip>

      </Toolbar>
    </AppBar>
  );
}

export default observer(
  Header
);
