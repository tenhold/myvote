import React, { Component } from 'react';
import Races from './MyElectionRaces.jsx';
import NavBar from '../components/style-components/NavBar.jsx';
// // import Greeting from '../components/style-components/Greeting.jsx';


const MyElection = (({ ballotList }) => {
  return (
    <div className='container'>
       {/* <Greeting /> */}
       {/* <h1>Hello from MyElection!</h1> */}
       <NavBar />
       {/* <h4 className='center'>MyElection</h4> */}
      <Races />
    </div>
  );
});


export default MyElection;
