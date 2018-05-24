import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../../../UI/Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolBar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggler} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
