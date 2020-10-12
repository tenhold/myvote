import React from 'react';
import PageNavBar from '../style-components/PageNavBar.jsx';
import SettingsIcon from '@material-ui/icons/Settings';
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
        {/* <Grid> */}
        <h1 style={mystyle}>
          MyProfile
          <SettingsIcon
            fontSize='large'
            onClick={(event) =>
              (window.location.href = 'http://localhost:8080/userform')
            }
          />
        </h1>
        {/* <SettingsIcon /> */}
        {/* <Button
          variant='contained'
          color='secondary'
          href='http://localhost:8080/userform'
        >
          EDIT PROFILE
        </Button> */}
        <div className='table'>
          <table className='table'>
            <tbody>
              <tr>
                <th scope='row'>First Name</th>
                <td>{firstName}</td>
              </tr>
              <tr>
                <th scope='row'>Last Name</th>
                <td>{lastName}</td>
              </tr>
              <tr>
                <th scope='row'>Email</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th scope='row'>Address</th>
                <td>{address}</td>
              </tr>
              <tr>
                <th scope='row'>Date of Birth</th>
                <td>{dob}</td>
              </tr>
              <tr>
                <th scope='row'>Party Affiliation</th>
                <td>{party}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
