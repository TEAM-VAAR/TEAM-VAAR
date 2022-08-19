import React, { Component } from 'react'
import { Nav, NavItem } from "reactstrap"

class Header extends Component {
  render() {
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = this.props
      console.log("logged_in:", logged_in);
      console.log("current_user:", current_user);

    return (
      <>
      <h1>HonestReviews.com</h1>
      <Nav>
          {/* Home page link for all users */}
          {
            <NavItem>
              <a href="/" className="nav-link">
                Home
              </a>
            </NavItem>
          }

          {/* School index link for all users */}
          {
            <NavItem>
              <a href="/schoolindex" className="nav-link">
                All Schools
              </a>
            </NavItem>
          }

          {/* Review index link for all users */}
          {
            <NavItem>
              <a href="/reviewindex" className="nav-link">
                All Reviews
              </a>
            </NavItem>
          }

          {/* Sign out link for logged in users */}
          {logged_in && 
            <NavItem>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
          }

          {/* Sign in link for users not logged in */}
          {!logged_in && (
            <NavItem>
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            </NavItem>
          )}

          {/* Sign up link for not logged in users */}
          {!logged_in && (
            <NavItem>
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </NavItem>
          )}

          {/* New Review link for logged in user */}
          {logged_in && (
            <NavItem>
              <a href="/reviewnew" className="nav-link">
                New Review
              </a>
            </NavItem>
          )}
          {/* New Review link for logged in user */}
          {logged_in && (
            <NavItem>
              <a href="/myreviews" className="nav-link">
                My Reviews
              </a>
            </NavItem>
          )}

            {/* Home page link for all users */}
            {
            <NavItem>
              <a href="/aboutus" className="nav-link">
                About Us
              </a>
            </NavItem>
          }

        </Nav>
      </>
    )
  }
}

export default Header