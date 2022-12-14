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
            src='https://pbs.twimg.com/media/FbMSC_XaAAY6vmq?format=jpg&name=large'
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
          <NavLink href='/myreviews' className='nav-link'>MY REVIEWS</NavLink>
        )}

        <NavLink href='/aboutus'>ABOUT US</NavLink>
      </header>
    );
  }
}

export default Header;
