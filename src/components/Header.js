import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';


class Header extends Component {

    constructor(props){
        super(props);
       
        
        this.typographyV1Theme = this.typographyV1Theme.bind(this);
    
      
    } 
    typographyV1Theme(theme) {
        return createMuiTheme({
          ...theme,
          typography: {
            useNextVariants: false,
          },
        });
      }
    render() {
       const {classes} =this.props.color
      
      return (
        <MuiThemeProvider theme={this.typographyV1Theme}> 
        <AppBar position="absolute" className={classes.appBar} >
        <Toolbar>
        <Typography variant="body1"  color="inherit" >
          Synerzip>>>>>>>>>>>>>>.
        </Typography>
        <Typography variant="body1" gutterBottom align="right">
        {/* <Button value="Login" color="red">Login</Button> */}
        </Typography>
        
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
        );
           
      
  }
}
export default Header;
