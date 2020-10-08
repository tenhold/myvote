import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';

import Homepage from '../Homepage.jsx';
import MySupport from '../MySupport.jsx';
import MyElection from '../MyElection.jsx';
import MyBallot from '../MyBallot.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
      <>
        <AppBar title='MyVote'>
            <span id='logo'>
              <img src={logo} width={200} />
            </span>
            <Tabs value={0}>
              <Tab label='MySupport' />
              <Tab label='MyElection'/>
              <Tab label='MyBallot' />
              <Tab label='MyProfile' />
              <GoogleLogoutButton />
            </Tabs>
        </AppBar>
      </>
    );
  }
}

// const NavBar = (props) => {
//   return (
//     <AppBar title='MyVote'>
//       <span id='logo'>
//         <img src={logo} width={200} />
//       </span>
//       <Tabs value={0}>
//         <Tab label='MySupport' />
//         <Tab label='MyElection'
//           onClick={this.handleClick}
//         />
//         <Tab label='MyBallot' />
//         <Tab label='MyProfile' />
//         <GoogleLogoutButton />
//       </Tabs>
//     </AppBar>
//   );
// };

export default NavBar;
