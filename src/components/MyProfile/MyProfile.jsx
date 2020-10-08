import React from 'react';
import NavBar from '../style-components/NavBar.jsx';
import Greeting from '../style-components/Greeting.jsx';
import UserForm from './UserForm.jsx';
import FormUserDetails from './FormUserDetails.jsx';
import { Grid } from '@material-ui/core';

const MyProfile = ({
  firstName,
  lastName,
  email,
  address,
  city,
  dob,
  party_affiliation,
}) => {
  return (
    <div className='container'>
      {/* <Greeting /> */}
      <NavBar />
      <p></p>
      <h2 className='profile-header'>MyProfile</h2>
      {/* <UserForm /> */}
      <div>
        <ul className='profile-details'>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
          <li>{address}</li>
          <li>{city}</li>
          <li>{dob}</li>
          <li>{party_affiliation}</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
