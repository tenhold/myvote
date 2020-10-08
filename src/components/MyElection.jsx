import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';

import createVoterId from '../../server/helpers/createVoterId';
import getCandidateList from '../../server/helpers/candidateList';

class MyElection extends Component {
  constructor(props) {        // should have the current user logged in information
    super(props);  

    this.state = {
      ballotList: []
    }
  
  }

  componentDidMount() {
    createVoterId()
      .then(data => {
        const { voter_device_id } = data.data;
        getCandidateList(voter_device_id, '1217 Magazine St nola la')
          .then(data => {
            const { ballot_item_list } = data.data;
            this.setState({
              ballotList: ballot_item_list
            });
            console.log(this.state)
          });
      });  
  }
  
  
  render() {
    const { ballotList } = this.state;
    if (!ballotList.length) {
      return (
        <div className='container'>
          <Greeting />
          <NavBar />
          <h4 className='center'>MyElection</h4>
           <div>loading...</div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <Greeting />
          <NavBar />
          <h4 className='center'>MyElection</h4>
          <ul>
            {ballotList.reduce((ballotRace, curBallotRace) => {
                if (curBallotRace.ballot_item_display_name === "U.S. Senate Louisiana") {
                  ballotRace = curBallotRace.candidate_list;
                }
                return ballotRace;
              }, {})
              .map(({ballot_item_display_name, candidate_photo_url_medium}) => (
                <>
                  <div>{ballot_item_display_name}</div>
                  <img src={candidate_photo_url_medium} />
                </>
              ))}
          </ul>
        </div>
      )
        
      
    }
  }
}

export default MyElection;
