import React from 'react';
import NavBar from '../style-components/NavBar.jsx';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';

const MyProfile = ({
  firstName,
  lastName,
  email,
  address,
  city,
  state,
  zipcode,
  dob,
  party_affiliation,
}) => {
  const mystyle = {
    color: 'white',
    backgroundColor: 'Crimson',
    padding: '10px',
    fontFamily: 'Helvetica',
  };
  return (
    <div className='container'>
      <NavBar />

      <div className='header'>
        <Grid>
          <h1 style={mystyle}>MyProfile</h1>
          <Button
            variant='contained'
            color='secondary'
            href='http://localhost:8080/userform'
          >
            EDIT PROFILE
          </Button>
        </Grid>
      </div>
      <Grid
        container
        direction='column'
        item
        justify='center'
        alignItems='center'
        xs={12}
      >
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
            <ListItemText primary='Address' secondary={address}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary='City' secondary={city}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary='State' secondary={state}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary='Zipcode' secondary={zipcode}></ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText primary='DOB' secondary={dob}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Party'
              secondary={party_affiliation}
            ></ListItemText>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default MyProfile;
