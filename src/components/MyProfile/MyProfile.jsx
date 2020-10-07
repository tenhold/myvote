import React from 'react';
import NavBar from '../style-components/NavBar.jsx';
import Greeting from '../style-components/Greeting.jsx';
import UserForm from './UserForm.jsx';

const MyProfile = () => {
  return (
    <div className='container'>
      {/* <Greeting /> */}
      <NavBar />
      <p></p>
      <h4 className='center'>MyProfile</h4>
      <UserForm />
    </div>
  );
};

export default MyProfile;
