import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    drawerstate: true
  };

  sideDrawerCloseHandler = () => {
    this.setState({ drawerstate: false });
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerstate: !prevState.drawerstate };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggler={this.toggleDrawer} />
        <SideDrawer
          open={this.state.drawerstate}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
