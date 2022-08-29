import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";



class Footer extends Component {
  render() {
    return (
      <Navbar className="footer" color='light' dark>
        <NavbarBrand href='/'>
          <img
            alt='logo'
            src='https://pbs.twimg.com/media/FbVh31NXEAUXCcc?format=jpg&name=large'
            style={{
              height: 50,
              width: 200,
            }}
          />
        </NavbarBrand>
        <div>MAKE YOUR NEXT MOVE THE BEST MOVE</div>
      </Navbar>
    );
  }
}

export default Footer;
