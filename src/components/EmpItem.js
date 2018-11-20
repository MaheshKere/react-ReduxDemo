import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 260,
      backgroundColor: theme.palette.background.paper,
    },
  });

class EmpItem extends Component {
    
    constructor(props){
      console.log('constructor')
      super(props)
    }
    componentDidMount() {
      console.log('DidMount')
    }
  
    componentWillUnmount() {
      console.log('Unmount')
    }
   
    componentWillMount() {
      console.log('Mount')
    }
   
render() {
  console.log('Render')
        return (
            
        <div>
        <List component="nav">
        <ListItem
        button ={true }
        selected={this.props.selectedEmp.name===this.props.emp.name}
          onClick={() => this.props.click(this.props.emp)}
        
        >

         <ListItemText primary={this.props.emp.name}/>
        </ListItem>
        
      </List>
     </div> 
    );
  }
}

export default withStyles(styles)(EmpItem);