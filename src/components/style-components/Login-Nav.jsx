import React from 'react';
import { AppBar } from '@material-ui/core';
import logo from '../../../assets/myvote_sm.png';

const LoginNavbar = () => {
  return (
    <AppBar title='MyVote'>
      <span id='logo'>
        <img src={logo} width={200} />
      </span>
    </AppBar>
  );
};

export default LoginNavbar;
