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
  
    this.getCandidateList = this.getCandidateList.bind(this);
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
  getCandidateList(race, voterId, state) {
    axios.get(`https://api.wevoteusa.org/apis/v1/allBallotItemsRetrieve`, {
      params: {
        voter_device_id: voterId,
        google_civic_election_id: 1000112,
        state_code: state || 'la'
      }
    })
      .then(data => {
        // console.log('axios GETTTTTTTTT', data.data.ballot_item_list);
        const { ballot_item_list } = data.data;
        const race = ballot_item_list.reduce((ballotRace, curBallotRace) => {
          if (curBallotRace.ballot_item_display_name === race) {
            ballotRace = curBallotRace.candidate_list;
          }
          return ballotRace;
        }, {});
        this.setState({
          races
        });
      })
      .catch(err => console.err('error in axios get', err))
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
          {/* <center>I choose u Pikachu</center> */}
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
