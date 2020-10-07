import React, { Component } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles';
// import { AppBar, TextField, Button } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
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
    const {
      values: {
        firstName,
        lastName,
        email,
        address,
        city,
        dob,
        party_affiliation,
      },
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar title='Confirmation' />
            <List>
              <ListItem primary='First Name' secondary={firstName}></ListItem>
              <ListItem primary='Last Name' secondary={lastName}></ListItem>
              <ListItem primary='Email' secondary={email}></ListItem>
              <ListItem primary='Address' secondary={address}></ListItem>
              <ListItem primary='City' secondary={city}></ListItem>
              <ListItem primary='DOB' secondary={dob}></ListItem>
              <ListItem
                primary='Party'
                secondary={party_affiliation}
              ></ListItem>
            </List>
            <br></br>
            <Button color='primary' variant='contained' onClick={this.continue}>
              Continue to Profile
            </Button>
            <Button color='secondary' variant='contained' onClick={this.back}>
              Back
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
