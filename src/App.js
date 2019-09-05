import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PhotosScreen from './containers/photos'
import './styles/App.css'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 2,
  }
}))

function App() {
  const classes = useStyles()
  
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static" className="topbar">
          <Toolbar>
            <Typography variant="h2" className={classes.title}>
              Photos List
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <div className="App-content">
        <PhotosScreen/>
      </div>
    </div>
  );
}

export default App;
