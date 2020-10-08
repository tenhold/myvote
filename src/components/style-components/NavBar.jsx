import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import logo from '../../../assets/myvote_sm.png';

const NavBar = () => {
  return (
    <AppBar title='MyVote'>
      <span id='logo'>
        <img src={logo} width={200} />
      </span>
      <Tabs value={0}>
        <Tab label='MySupport' />
        <Tab label='MyElection' />
        <Tab label='MyBallot' />
        <Tab label='MyProfile' />
        <Tab label='Logout' />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
