import React, { Component, useState } from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';
import Container from '@material-ui/core/Container';
import YourBallot from './YourBallot.jsx';
import { ballot_item_list } from './response.json';

const MyElection = ({ ballotList }) => {
  return (
    <div className='container'>
      <Greeting />
      <NavBar />
      <h4 className='center MyElection'>MyElection</h4>
      <YourBallot />
    </div>
  );
};

export default MyElection;
