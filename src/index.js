import React from 'react';
import ReactDOM from 'react-dom';
import {
  CssBaseline
} from '@material-ui/core';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import {
  red
} from '@material-ui/core/colors';

import Layout from './src/components/core/layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#011A27',
    },
    secondary: {
      main: '#F0810F',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true,
    fontSize: 12,
  },
});

const styles = () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '-webkit-fill-available'
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
          
            <Layout />

          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const StyledApp = withStyles(
  styles, 
  { withTheme: true }
)(
  App
);

ReactDOM.render(<StyledApp />, document.getElementById('root'));
