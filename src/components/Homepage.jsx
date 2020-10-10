import React, { Component } from 'react';
import NavBar from './style-components/NavBar.jsx';
import ElectionCountdown from '../components/style-components/ElectionCountdown.jsx';
import logoLg from '../../assets/myvote_lg.png';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props homepage', this.props.user);
    const { firstName } = this.props.user;
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
        <h1>Welcome {firstName} </h1>
        <ElectionCountdown />
      </div>
    );
  }
}

export default Homepage;
