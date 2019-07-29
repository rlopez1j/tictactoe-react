import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles } from '@material-ui/core';
import 'typeface-roboto';
import Board from './BoardContainer';

const useStyles = makeStyles({
  toolBarFlex: {
    display: 'flex',
    justifyContent: 'center'
  }
})

function App() {
  const classes = useStyles()

  return (<>
    { /* have links in here*/}
    <CssBaseline />
    <AppBar position="static" color="primary">
      <Toolbar color="inherit" className={classes.toolBarFlex}>
        <Typography variant="h4" align="center">
          Game
        </Typography>
      </Toolbar>
    </AppBar>
    <Board />
  </>);
}

export default App;