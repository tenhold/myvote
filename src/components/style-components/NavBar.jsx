import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';

import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <>
        <AppBar title='MyVote'>
          <Link to='/homepage'>
            <span id='logo'>
              <img src={logo} width={200} />
            </span>
          </Link>  
          <Tabs value={0}>
            <Link to='/mysupport'>
              <Tab label='MySupport' />
            </Link>
            <Link to='/myelection' >
              <Tab label='MyElection'/>
            </Link>
            <Link to='/myballot'>
              <Tab label='MyBallot' />
            </Link>
            <Link to='/myprofile'>
              <Tab label='MyProfile' />
            </Link>
            <Link>
              <GoogleLogoutButton />
            </Link>
          </Tabs>
        </AppBar>
      </>
    );
  }
}

export default NavBar;
