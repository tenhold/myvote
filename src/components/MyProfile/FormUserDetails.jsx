import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails = ({
  nextStep,

  handleFields,
  firstName,
  lastName,
  email,
  address,
  dob,
  party,
}) => {
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar title='Enter MyProfile Details' />
          <TextField
            name='firstName'
            margin='normal'
            placeholder='Enter First Name'
            label='First Name'
            onChange={handleFields('firstName')}
            defaultValue={firstName}
          />

          <TextField
            name='lastName'
            margin='normal'
            placeholder='Enter Last Name'
            label='Last Name'
            onChange={handleFields('lastName')}
            defaultValue={lastName}
          />

          <TextField
            name='email'
            margin='normal'
            placeholder='Enter Email Address'
            label='Email'
            onChange={handleFields('email')}
            defaultValue={email}
          />

          <TextField
            name='address'
            margin='normal'
            placeholder='Enter Home Address'
            label='Address, City, State, Zipcode'
            onChange={handleFields('address')}
            defaultValue={address}
          />

          <TextField
            name='dob'
            margin='normal'
            placeholder='Date of Birth'
            label='Date of birth'
            onChange={handleFields('dob')}
            defaultValue={dob}
          />

          <TextField
            name='party'
            margin='normal'
            placeholder='Enter Party Affiliation'
            label='Party Affiliation'
            onChange={handleFields('party')}
            defaultValue={party}
          />
          <Button color='primary' variant='contained' onClick={nextStep}>
            Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
