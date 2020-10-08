import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {

  componentDidMount = () => {
    const {
        firstName,
        lastName,
        email,
        address,
        city,
        state,
        zipcode,
        dob,
        party_affiliation
    } = this.props.values;
    const { _id } = this.props.user;
    console.log(_id);
    axios.patch(`/api/users/:${_id}`)
      .then((data) => {
        console.log('axios patch', data);
      })
      .catch(err => console.error('USER FORM ERROR: ', err));
  };

  continue = (event) => {
    event.preventDefault();
    // Send data to API
    // axios
    //   .patch(`/api/users/${user.id}`, {
    //     firstName,
    //     lastName,
    //     email,
    //     address,
    //     dob,
    //     party,
    //   })
    //   .then((data) => {
    //     console.log('axios patch', data);
    //   })
    //   .catch((err) => console.error('USER FORM ERROR: ', err));

    nextStep();
    console.log('in confirm prof function', firstName);
  };

  const back = (event) => {
    event.preventDefault();
    previousStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar title='Confirmation' />
          <List>
            <ListItem>
              <ListItemText
                primary='First Name'
                secondary={firstName}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Last Name'
                secondary={lastName}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Email' secondary={email}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Address, City, State, Zipcode'
                secondary={address}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Date of Birth'
                secondary={dob}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Party' secondary={party}></ListItemText>
            </ListItem>
          </List>
          <Button color='primary' variant='contained' onClick={confirmProfile}>
            Continue to Profile
          </Button>
          <Button color='secondary' variant='contained' onClick={back}>
            Back
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;
