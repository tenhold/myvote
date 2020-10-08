import React, { Component } from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';

import getCandidateList from '../../server/helpers/candidateList';

class MyElection extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    getCandidateList()
  }

  render() {
    {}
    return (
      <div className='container'>
        <Greeting />
        <NavBar />
        <h4 className='center'>MyElection</h4>
        <ul>
          {/* {getCandidateList('President of the United States').map(candidate => (
            <li>{candidate}</li>
          ))} */}
        </ul>
        {/* <center>I choose u Pikachu</center> */}
      </div>
    );
  }
}

export default MyElection;
