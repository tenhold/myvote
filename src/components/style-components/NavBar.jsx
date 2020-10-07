import React from 'react';

const NavBar = () => {
  // <div className='nav'>
  //   <span
  //     className={page === 'myProfile' ? 'nav-selected' : 'nav-unselected'}
  //     onClick={() => changePage('myProfile')}
  //   >
  //     MyProfile
  //   </span>
  //   <span
  //     className={page === 'myBallot' ? 'nav-selected' : 'nav-unselected'}
  //     onClick={() => changePage('myBallot')}
  //   >
  //     MyBallot
  //   </span>
  //   <span
  //     className={page === 'myElection' ? 'nav-selected' : 'nav-unselected'}
  //     onClick={() => changePage('myElection')}
  //   >
  //     MyElection
  //   </span>
  //   <span
  //     className={page === 'mySupport' ? 'nav-selected' : 'nav-unselected'}
  //     onClick={() => changePage('mySupport')}
  //   >
  //     MySupport
  //   </span>
  //   <span
  //     className={page === 'logout' ? 'nav-selected' : 'nav-unselected'}
  //     onClick={() => changePage('logout')}
  //   >
  //     Logout
  //   </span>
  // </div>

  return (
    <nav className='nav-wrapper blue darken-3'>
      <div className='container'>
        <ul className='navbar'>
          <li>
            <a href='/homepage'>Home</a>
          </li>
          <li>
            <a href='/myprofile'>MyProfile</a>
          </li>
          <li>
            <a href='/myelection'>MyElection</a>
          </li>
          <li>
            <a href='/myballot'>MyBallot</a>
          </li>
          <li>
            <a href='/mysupport'>MySupport</a>
          </li>
          <li>
            <a href='/logout'>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
