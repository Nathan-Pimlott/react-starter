import React, { useState } from 'react';
import {
  Grid, 
  Typography,
  ListItem,
  List,
  Card,
  Paper,
  makeStyles,
  InputBase,
  IconButton,
  Divider
} from '@material-ui/core';
import { Save } from '@material-ui/icons';
import RenderForm from './form';

const styles = makeStyles({
  root: {
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  marginTop: {
    marginTop: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 12
  }
})

const Home = () => {
  const classes = styles();

  const [
    todo,
    setTodo
  ] = useState('');

  const [
    todos,
    setTodos
  ] = useState([]);

  const addTodo = () => {
    setTodos(
      [
        ...todos,
        todo
      ]
    );

    setTodo('');
  };

  return (
    <React.Fragment>
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
          className={classes.marginTop}
        >

          <Typography 
            variant='h5'
          >
            Todo List
          </Typography>

        </Grid>
      </Grid>
      
      <RenderForm 
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />

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
          className={classes.marginTop}
        >
          {
            todos.length > 0 ?
            <Card>
              <List>
                {
                  todos.map((todo, idx) => (
                    <ListItem 
                      key={idx}
                    >
                      <Typography>
                        {todo}
                      </Typography>
                    </ListItem>                  
                  ))
                }
              </List>
            </Card> :
            <Typography 
              className={classes.text}
            >
              Add some todos...
            </Typography>
          }
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home;