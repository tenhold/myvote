import React from 'react';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  '& > *': {
    margin: theme.spacing(5),
  },
  logo: {
    width: 195,
    height: 95,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    supportBtn: {
      '&svg': {
        fontSize: 50,
      },
    },
  },
}));

const PageNavBar = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <nav className={classes.root}>
        <AppBar position='static' color='primary'>
          <Toolbar style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ flexGrow: 1 }}>
              <a href='http://localhost:8080/homepage'>
                <img className={classes.logo} src={logo} />
              </a>
            </Typography>
            <Typography
              style={{ flexGrow: 1 }}
              variant='h4'
              fontFamily='HelveticaNeue-CondensedBold'
            >
              Your vote counts!
            </Typography>
            <Button
              style={{ fontSize: '23px' }}
              // fullWidth={true}
              color='inherit'
              href='http://localhost:8080/mysupport'
              size='large'
              startIcon={
                <AccessibilityNewRoundedIcon className={classes.supportBtn} />
              }
            >
              MySupport
            </Button>
            <Button
              style={{ fontSize: '23px' }}
              // fullWidth={true}
              color='inherit'
              href='http://localhost:8080/myelection'
              size='large'
              startIcon={<FlagRoundedIcon />}
            >
              MyElection
            </Button>
            <Button
              style={{ fontSize: '23px' }}
              // fullWidth={true}
              color='inherit'
              href='http://localhost:8080/myprofile'
              size='large'
              startIcon={<AccountCircleIcon />}
            >
              MyProfile
            </Button>
          </Toolbar>
        </AppBar>
      </nav>
    </BrowserRouter>
  );
};

export default PageNavBar;
