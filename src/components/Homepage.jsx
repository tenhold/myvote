import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import moment from 'moment';
import axios from 'axios';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';
import PledgeButton from './style-components/Button.jsx';
import Friends from './Friends.jsx';
import logoLg from '../../assets/myvote_lg.png';
import Index from '../index.jsx';

const Homepage = ({ page, user, users }) => {
  return (
    <div className='container'>
      <NavBar />
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
