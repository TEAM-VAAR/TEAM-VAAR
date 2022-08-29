import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./NotFoundPage.style.css";

class NotFound extends Component {
  render() {
    return (
      <>
        <h1 className="head"> Page Not Found</h1>
          <NavLink to={"/"}>
            <Button className="press"> Return Home</Button>
          </NavLink>
        <body className="background">
            

        </body>
      </>
    );
  }
}

export default NotFound;
