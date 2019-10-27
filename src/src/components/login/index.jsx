import React, { 
  useState, 
  useContext 
} from 'react';
import {
  Grid, 
  Typography,
  Card,
  makeStyles,
  TextField,
  Button
} from '@material-ui/core';

import AuthStore from '../../stores/auth';
import { observer } from 'mobx-react-lite';

const styles = makeStyles({
  padding: {
    padding: 20
  },
  marginTop: {
    marginTop: 20
  },
  loginButton: {
    textTransform: 'none'
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loginCardContainer: {
    display: 'flex',
  },
  loginCard: {
    margin: 'auto',
    height: 'max-content'
  }
});

const Login = () => {
  const classes = styles();

  const authStore = useContext(AuthStore);

  const [
    email,
    setEmail
  ] = useState('');

  const [
    password,
    setPassword
  ] = useState('');

  console.log('Error: ', authStore.error && authStore.error.message);
  

  return (
    <Grid
      container
      justify='center'
    >
      <Grid 
        item 
        xs={12}
        sm={8}
        md={4}
        lg={3}
        xl={2}
        className={classes.loginCardContainer}
      >

        <Card 
          className={classes.loginCard}
        >
          <Grid 
            container 
            className={classes.padding}
          >
            <Grid 
              item 
              xs={12}
            >
              
              <Typography
                color='primary'
                variant='h6'
              >
                React Starter Login
              </Typography>

            </Grid>
            <Grid 
              item 
              xs={12}
              className={classes.marginTop}
            >

              <TextField 
                fullWidth
                label='Email Address'
                variant='outlined'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />

            </Grid>
            <Grid 
              item 
              xs={12}
              className={classes.marginTop}
            >

              <TextField 
                fullWidth
                label='Password'
                variant='outlined'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

            </Grid>
            <Grid 
              item 
              xs={12}
              className={classes.marginTop}
            >

              <Button 
                variant='contained' 
                color='secondary' 
                onClick={() => {
                  authStore.login(
                    email, 
                    password
                  );
                }}
                className={classes.loginButton}
              >
                Login
              </Button>

            </Grid>
            {
              authStore.error &&
              <Grid
                item
                xs={12}
                className={classes.marginTop}
              >
                <Typography 
                  className={classes.errorText}
                  variant='body1'
                >
                  {authStore.error.message}
                </Typography>
              </Grid>
            }
          </Grid>

        </Card>

      </Grid>
    </Grid>

  )
}

export default observer(
  Login
);