import React from 'react';
import PageNavBar from '../style-components/PageNavBar.jsx';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import whiteHouse from '../../../assets/constitution.jpg';
const MyProfile = ({ firstName, lastName, email, address, dob, party }) => {
  const mystyle = {
    color: 'white',
    backgroundColor: 'Crimson',
    padding: '10px',
    fontFamily: 'HelveticaNeue-CondensedBold',
  };

  const styles = {
    root: {
      margin: '10px auto',
      padding: '20px',
      maxWidth: 500,
      maxHeight: 300,
    },
    header: {
      backgroundImage: `url(${whiteHouse})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
  };
  return (
    <div className='container' style={styles.header}>
      <PageNavBar />

      <div className='header' style={styles.content}>
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
              <ListItemText
                primary='Party Affiliation'
                secondary={party}
              ></ListItemText>
            </ListItem>
          </List>
        </Grid>
      </div>
    </div>
  );
};

export default MyProfile;
