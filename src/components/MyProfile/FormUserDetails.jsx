import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    // Send data to API
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleFields } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar title='Enter MyProfile Details' />
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter First Name'
              label='First Name'
              onChange={handleFields('firstName')}
              defaultValue={values.firstName}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Last Name'
              label='Last Name'
              onChange={handleFields('lastName')}
              defaultValue={values.lastName}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Email Address'
              label='Email'
              onChange={handleFields('email')}
              defaultValue={values.email}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Home Address'
              label='Address'
              onChange={handleFields('address')}
              defaultValue={values.address}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter City'
              label='City'
              onChange={handleFields('city')}
              defaultValue={values.city}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter State'
              label='State'
              onChange={handleFields('state')}
              defaultValue={values.state}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Zipcode'
              label='Zipcode'
              onChange={handleFields('zipcode')}
              defaultValue={values.zipcode}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Date of Birth'
              label='Date of birth'
              onChange={handleFields('dob')}
              defaultValue={values.dob}
            />
            <br></br>
            <TextField
              placeholder='Enter Party Affiliation'
              label='Party Affiliation'
              onChange={handleFields('party_affiliation')}
              defaultValue={values.party_affiliation}
            />
            <Button color='primary' variant='contained' onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
