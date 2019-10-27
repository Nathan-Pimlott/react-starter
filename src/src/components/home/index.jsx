import React from 'react';
import {
  Grid, 
  Typography
} from '@material-ui/core';

const Home = () => {
  return (
    <Grid
      container
    >
      <Grid 
        item 
        xs={12}
      >

        <Typography>
          Hello World
        </Typography>

      </Grid>
    </Grid>

  )
}

export default Home;