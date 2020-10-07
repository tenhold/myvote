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
    this.props.prevStep();
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
              placeholder='Enter Your First Name'
              label='First Name'
              onChange={handleFields('firstName')}
              defaultValue={values.firstName}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Your Last Name'
              label='Last Name'
              onChange={handleFields('lastName')}
              defaultValue={values.lastName}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Your Email Address'
              label='Email'
              onChange={handleFields('email')}
              defaultValue={values.email}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Your Home Address'
              label='Address'
              onChange={handleFields('address')}
              defaultValue={values.address}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Your City'
              label='City'
              onChange={handleFields('city')}
              defaultValue={values.city}
            />
            <br></br>
            <TextField
              margin='normal'
              fullWidth
              placeholder='Enter Your Date of Birth'
              label='Date of birth'
              onChange={handleFields('dob')}
              defaultValue={values.dob}
            />
            <br></br>
            <TextField
              placeholder='Enter Your Party'
              label='Party Affiliation'
              onChange={handleFields('party_affiliation')}
              defaultValue={values.party_affiliation}
            />
            <br></br>
            <Button color='primary' variant='contained' onClick={this.continue}>
              Continue
            </Button>
            <Button color='primary' variant='contained' onClick={this.back}>
              Back
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
