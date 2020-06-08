import React from 'react';

import classes from './NavigationItems.css';
import NavItem from './NavigationItem/NavigationItem';

const navItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navItems;
