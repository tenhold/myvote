import React, { useState } from 'react';
import NavBar from './style-components/NavBar.jsx';
import ElectionCountdown from '../components/style-components/ElectionCountdown.jsx';
import logoLg from '../../assets/myvote_sm.png';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import WH4 from '../../assets/WH4.jpg';
import moment from 'moment';
import Button from '../components/style-components/Button.jsx';
import Friends from '../components/Friends.jsx';

const Homepage = ({ user }) => {
  const styles = {
    root: {
      margin: '10px auto',
      padding: '20px',
      maxWidth: 500,
      maxHeight: 300,
    },
    header: {
      backgroundImage: `url(${WH4})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
      // backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
  };
  const m = moment();
  const date = m.format('dddd, MMMM Do YYYY');

  console.log('user on the homepage', user);
  return (
    <div className='container'>
      <NavBar user={user} />
      <div style={styles.header}>
        <div style={styles.content}>
          <center>
            <img src={logoLg} />
            <div className='content'>
              <Typography component='div'>
                <Box
                  fontFamily='HelveticaNeue-CondensedBold'
                  fontSize='h5.fontSize'
                  m={5}
                >
                  {<h4>{date}</h4>}
                  <ElectionCountdown />
                </Box>
              </Typography>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
