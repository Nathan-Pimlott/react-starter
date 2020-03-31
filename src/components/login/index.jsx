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
  Button,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff
} from '@material-ui/icons';
import { 
  observer 
} from 'mobx-react-lite';

import logo from '../../assets/images/logo.png';
import AuthStore from '../../stores/auth';

const styles = makeStyles({
  padding: {
    padding: 20
  },
  marginTop: {
    marginTop: 20
  },
  largeMarginTop: {
    marginTop: 40
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
  },
  logo: {
    width: 'auto',
    height: 120,
    margin: '0 auto'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  container: {
    backgroundImage: 'radial-gradient(#18354e, #060d13)',
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

  const [
    showPassword,
    setShowPassword
  ] = useState(false);

  return (
    <Grid
      container
      justify='center'
      className={classes.container}
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
              className={classes.titleContainer}
            >

              <img
                src={logo}
                alt='Logo'
                className={classes.logo}
              />
              
              <Typography
                color='primary'
                variant='h5'
              >
                React Starter Login
              </Typography>

            </Grid>
            <Grid 
              item 
              xs={12}
              className={classes.largeMarginTop}
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
                type={
                  showPassword ? 
                  'text' : 
                  'password'
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment 
                      position='end'
                    >
                      <IconButton
                        onClick={() => {
                          setShowPassword(
                            !showPassword
                          );
                        }}
                      >
                        {
                          showPassword ? 
                          <Visibility /> : 
                          <VisibilityOff />
                        }
                      </IconButton>
                    </InputAdornment>
                  )
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
                fullWidth
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