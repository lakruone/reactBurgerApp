import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Wrap from '../../../cover/wrap';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Wrap>
      <Backdrop
        show={props.open}
        clicked={props.sideDrawerToggle} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>

        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Wrap>

  );
}

export default sideDrawer;
