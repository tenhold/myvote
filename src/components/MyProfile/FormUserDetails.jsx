import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails = ({
  user,
  nextStep,
  previousStep,
  back,
  handleFields,
  firstName,
  lastName,
  email,
  address,
  dob,
  party,
  values,
  setStateOfInputs,
}) => {
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar title='Enter MyProfile Details' />
          <TextField
            name='firstName'
            margin='normal'
            fullWidth
            placeholder='Enter First Name'
            label='First Name'
            onChange={handleFields('firstName')}
            defaultValue={firstName}
          />
          <br></br>
          <TextField
            name='lastName'
            margin='normal'
            fullWidth
            placeholder='Enter Last Name'
            label='Last Name'
            onChange={handleFields('lastName')}
            defaultValue={lastName}
          />
          <br></br>
          <TextField
            name='email'
            margin='normal'
            fullWidth
            placeholder='Enter Email Address'
            label='Email'
            onChange={handleFields('email')}
            defaultValue={email}
          />
          <br></br>
          <TextField
            name='address'
            margin='normal'
            fullWidth
            placeholder='Enter Home Address'
            label='Address, City, State, Zipcode'
            onChange={handleFields('address')}
            defaultValue={address}
          />
          <br></br>

          <br></br>
          <TextField
            name='dob'
            margin='normal'
            fullWidth
            placeholder='Date of Birth'
            label='Date of birth'
            onChange={handleFields('dob')}
            defaultValue={dob}
          />
          <br></br>
          <TextField
            name='party'
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
