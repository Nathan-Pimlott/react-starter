import React, { 
  useContext
} from "react";
import {
  observer 
} from "mobx-react-lite";
import {
  useHistory
} from 'react-router-dom';
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
  },
  title: {
    cursor: 'pointer',
    transition: 'font-size 0.2s',
    fontSize: 16,
    '&:hover': {
      fontSize: 18,
    }
  }
})

const Header = () => {
  const classes = styles();

  const history = useHistory();

  const authStore = useContext(AuthStore)

  return (
    <AppBar>
      <Toolbar>

        <Typography 
          variant='h6'
          className={classes.title}
          onClick={() => {
            history.push('');
          }}
        >
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
