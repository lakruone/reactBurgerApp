import React, {Component} from 'react';
import Wrap from '../../cover/wrap';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    sideDrawerOpen:false
  }

  sideDrawerCloseHandler = () =>{
    this.setState({sideDrawerOpen:false})
  }

  drawerToggleHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  render() {
    return (
      <Wrap>
       <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
       <SideDrawer
         sideDrawerToggle={this.sideDrawerCloseHandler}
         open={this.state.sideDrawerOpen}
         />
       <main className={classes.Content}>
         {this.props.children}
       </main>
      </Wrap>

    );
  }
}

export default Layout;
