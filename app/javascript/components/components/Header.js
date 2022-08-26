import React, { Component } from "react";
import { NavLink, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <header className='header'>
        <NavLink href='/'>
          <img
            src='https://pbs.twimg.com/media/Fai3ImPUIAIC2Wk?format=jpg&name=small'
            height='200px'
            alt='small Honest Reviews logo'
            className='smHRL'
          />
        </NavLink>

        <NavLink className='nav-links' href='/schoolindex'>
          ALL SCHOOLS
        </NavLink>

        <NavLink href='/reviewindex'>ALL REVIEWS</NavLink>

        {logged_in && <NavLink href={sign_out_route}>SIGN OUT</NavLink>}

        {!logged_in && <NavLink href={sign_in_route}>SIGN IN</NavLink>}

        {!logged_in && <NavLink href={new_user_route}>SIGN UP</NavLink>}

        {/* New Review link for logged in user */}
        {logged_in && (
          <NavItem>
            <a href='/myreviews' className='nav-link'>
              My Reviews
            </a>
          </NavItem>
        )}

        <NavLink href='/aboutus'>ABOUT US</NavLink>
      </header>
    );
  }
}

export default Header;
