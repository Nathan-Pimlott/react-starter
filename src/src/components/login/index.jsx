import React, { useState } from 'react';
import {
  Grid, 
  Typography,
  Card,
  makeStyles,
  TextField
} from '@material-ui/core';

const styles = makeStyles({
  padding: {
    padding: 20
  },
  marginTop: {
    marginTop: 20
  }
});

const Login = () => {
  const classes = styles();

  const [
    email,
    setEmail
  ] = useState('');

  const [
    password,
    setPassword
  ] = useState('');

  return (
    <Grid
      container
    >
      <Grid 
        item 
        xs={12}
        sm={8}
        md={4}
        lg={3}
        xl={2}
      >

        <Card>
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
                variant='outlined'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

            </Grid>
          </Grid>

        </Card>

      </Grid>
    </Grid>

  )
}

export default Login;