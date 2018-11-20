import React, { Component } from 'react';


import './App.css';
import LeftNav from './components/LeftNav';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import EmpDetails from './container/EmpDetails';
const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '97vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar});
 
class App extends Component {
 render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Header color={this.props}/>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          <div className={classes.toolbar} />
          <LeftNav/>
        <Divider />
       
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        < EmpDetails/>
      </main>
      </div>
    );
  }
}
export default withStyles(styles)(App);

