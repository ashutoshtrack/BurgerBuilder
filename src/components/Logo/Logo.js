import React from "react";
import burgerLogo from "../../assets/images/burgerlogo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="myBurger" />
  </div>
);

export default logo;
