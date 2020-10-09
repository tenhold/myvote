import React, { Component } from 'react';
import NavBar from './style-components/NavBar.jsx';
import logoLg from '../../assets/myvote_lg.png';

const Homepage = ({ onSignOut }) => {
  return (
    <div className='container'>
      <NavBar onSignOut={onSignOut} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <img src={logoLg} />
      </center>
      <p></p>
      <p></p>
      <h1>Welcome </h1>
    </div>
  );
};

export default Homepage;
