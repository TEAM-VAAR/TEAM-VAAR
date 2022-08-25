import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <Navbar className="my-2" color="primary" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://pbs.twimg.com/media/Fai3ImPUIAIC2Wk?format=jpg&name=small"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>
          <div>TEAM VAAR</div>
        </Navbar>
      </>
    );
  }
}

export default Footer;