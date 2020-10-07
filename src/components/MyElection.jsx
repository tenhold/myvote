import React, { Component } from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
// import Greeting from '../components/style-components/Greeting.jsx';
import { suppressDeprecationWarnings } from 'moment';

import electionData from '../../data.json';

class MyElection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      election: electionData
    }
  }

  componentDidMount() {
    const { ballot_item_list } = this.state.election;

    const candidateNames = ballot_item_list.filter(data => {
      if (data.ballot_item_display_name === 'President of the United States') {
        return data.candidate_list;
      }
    })
    // .map(pres => pres)


    console.log(candidateNames)
  }

  render() {
    return (
      <div className='container'>
        {/* <Greeting /> */}
        <NavBar />
        <p></p>
        <h4 className='center'>MyElection</h4>
        <center>I choose u Pikachu</center>
      </div>
    );
  }
}

export default MyElection;
