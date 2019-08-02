import React from 'react';
import { Link, Route } from 'react-router-dom'
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles, Button, ButtonGroup } from '@material-ui/core';
import 'typeface-roboto';
import Board from './BoardContainer';
import HistoryList from './HistoryList';
import HistoryView from './HistoryView'

const useStyles = makeStyles({
  toolBarFlex: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

function App() {
  const classes = useStyles()

  return (<>
    <CssBaseline />
    <AppBar position="static" color="primary">
      <Toolbar color="inherit" className={classes.toolBarFlex}>
        <ButtonGroup color="secondary" variant="contained">
          <Button>
            <Link to='/history' className={classes.link}>
              <Typography>
                History
                </Typography>
            </Link>
          </Button>
          <Button>
            <Link to='/game' className={classes.link}>
              <Typography align="center">
                Game
                </Typography>
            </Link>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
    <Route exact path='/' component={Board} />
    <Route path='/game' component={Board} />
    <Route path='/view/:id' component={HistoryView} />
    <Route path='/history' component={HistoryList} />
  </>);
}

export default App;