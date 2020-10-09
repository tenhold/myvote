import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';

import { NavLink, Router } from 'react-router-dom';

const NavBar = ({ onSignOut }) => {
  return (
    <>
      <AppBar title='MyVote'>
        <NavLink to='/homepage'>
          <span id='logo'>
            <img src={logo} width={200} />
          </span>
        </NavLink>
        <Tabs value={0}>
          <NavLink to='/mysupport'>
            <Tab label='MySupport' />
          </NavLink>
          <NavLink to='/myelection'>
            <Tab label='MyElection' />
          </NavLink>
          <NavLink to='/myballot'>
            <Tab label='MyBallot' />
          </NavLink>
          <NavLink to='/myprofile'>
            <Tab label='MyProfile' />
          </NavLink>

          <GoogleLogoutButton onSignOut={onSignOut} />
        </Tabs>
      </AppBar>
    </>
  );
};

export default NavBar;
