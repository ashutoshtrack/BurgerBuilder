import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../../../UI/Navigation/NavigationItems/NavigationItems";

const toolBar = props => (
  <header className={classes.Toolbar}>
    <div> Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
