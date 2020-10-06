import React from 'react';
import Homepage from '../Homepage.jsx';
import Index from '../../index.jsx';

const NavBar = ({ changePage, page }) => (
  <div className='nav'>
    {console.log(typeof changePage)}
    <span
      className={page === 'myProfile' ? 'nav-selected' : 'nav-unselected'}
      onClick={() => changePage('myProfile')}
    >
      MyProfile
    </span>
    <span
      className={page === 'myBallot' ? 'nav-selected' : 'nav-unselected'}
      onClick={() => changePage('myBallot')}
    >
      MyBallot
    </span>
    <span
      className={page === 'myElection' ? 'nav-selected' : 'nav-unselected'}
      onClick={() => changePage('myElection')}
    >
      MyElection
    </span>
    <span
      className={page === 'mySupport' ? 'nav-selected' : 'nav-unselected'}
      onClick={() => changePage('mySupport')}
    >
      MySupport
    </span>
    <span
      className={page === 'logout' ? 'nav-selected' : 'nav-unselected'}
      onClick={() => changePage('logout')}
    >
      Logout
    </span>
  </div>
);

export default NavBar;
