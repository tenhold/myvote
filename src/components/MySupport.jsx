import React from 'react';
import { Grid, Box, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import PageNavBar from '../components/style-components/PageNavBar.jsx';
import whiteHouse from '../../assets/constitution.jpg';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

const styles = {
  root: {
    // // margin: '10px auto',
    // padding: '20px',
    // // maxWidth: 500,
    // // maxHeight: 300,
  },

  header: {
    backgroundImage: `url(${whiteHouse})`,
    height: '100vh',
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
};
const MySupport = () => {
  const mystyle = {
    color: 'white',
    backgroundColor: 'Crimson',
    padding: '10px',
    fontFamily: 'HelveticaNeue-CondensedBold',
  };
  return (
    <div className='container' style={styles.header}>
      <PageNavBar />
      <div className='resources' style={styles.content}>
        <h1 style={mystyle}>MySupport</h1>
        <Grid justify='center' alignItems='center' container>
          <Box
            display='flex'
            justifyContent='center'
            component='span'
            display='block'
            width='100%'
            fontFamily='HelveticaNeue-CondensedBold'
            fontSize='h2.fontSize'
            // m={10}
            borderRadius={16}
          >
            <Grid justify='center' alignItems='center' container>
              <a
                href='https://rideshare2vote.com/request-a-ride/#webrequest'
                className='btn btn-primary stretched-link btn-lg btn-block'
              >
                <h2>Find MyRide</h2>
              </a>
            </Grid>
            <br></br>
            <Grid>
              <a
                href='https://www.headcount.org/verify-voter-registration/?source=HChomepage'
                className='btn btn-danger stretched-link btn-lg btn-block'
              >
                <h2>Check MyRegistration</h2>
              </a>
            </Grid>
            <br></br>
            <Grid>
              <a
                href='https://www.headcount.org/registertovote/?source=HChomepage'
                className='btn btn-primary stretched-link btn-lg btn-block'
              >
                <h2>Register To Vote</h2>
              </a>
            </Grid>
            <br></br>
            <Grid>
              <a
                href='https://www.vote.org/covid-19/'
                className='btn btn-danger stretched-link btn-lg btn-block'
              >
                <h2>COVID-19 Information</h2>
              </a>
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default MySupport;
