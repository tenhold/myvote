import React from 'react';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  '& > *': {
    margin: theme.spacing(3),
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
  },
}));

const NavBar = ({ onSignOut }) => {
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
            <Button
              fullWidth={true}
              color='inherit'
              href='http://localhost:8080/mysupport'
            >
              MySupport
            </Button>
            <Button
              fullWidth={true}
              color='inherit'
              href='http://localhost:8080/myelection'
            >
              MyElection
            </Button>
            <Button
              fullWidth={true}
              color='inherit'
              href='http://localhost:8080/myprofile'
            >
              MyProfile
            </Button>
          </Toolbar>
        </AppBar>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
