import React from 'react'
import { Component } from "react";
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap";


class NotFound extends Component {
    render() {
        return(
            <>
            <h1> Page Not Found</h1>
            <NavLink to={'/'}>
                <Button> Return Home</Button>
            </NavLink>
            </>
        )
    }
}

export default NotFound