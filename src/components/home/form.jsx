import React, { useState } from 'react';
import {
  Grid, 
  Paper,
  InputBase,
  IconButton,
  Divider
} from '@material-ui/core';
import {
  Save 
} from '@material-ui/icons';

const Home = (props) => {
  return (
    <Grid
      container
      justify='center'
    >
      <Grid 
        item 
        xs={12}
        sm={8}
        md={6}
        lg={4}
        xl={3}
        className={props.classes.marginTop}
      >

        <Paper 
          className={props.classes.root}
        >

          <InputBase
            className={props.classes.input}
            placeholder="Add a new todo"
            value={props.todo}
            onChange={(e) => {
              props.setTodo(e.target.value);
            }}
          />

          <Divider
            className={props.classes.divider} 
            orientation="vertical" 
          />

          <IconButton 
            onClick={() => {
              props.addTodo();
            }}
            className={props.classes.iconButton}
            disabled={!todo}
          >
            <Save 
              color='secondary' 
            />
          </IconButton>

        </Paper>

      </Grid>
    </Grid>
  )
}

export default Home;