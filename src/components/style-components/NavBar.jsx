import React from 'react';
import logo from '../../../assets/myvote_sm.png';
import GoogleLogoutButton from '../goog-auth-components/GoogleLogoutButton.jsx';
import { Link, BrowserRouter } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 135,
    height: 43.54,
  },
});
const NavBar = ({ onSignOut }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BrowserRouter>
      <nav className={classes.root}>
        <AppBar position='static' color='primary'>
          <Toolbar style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Grid justify={'center'} alignItems={'center'} container>
              <Grid style={{ justifySelf: 'flex-start' }} item>
                <img className={classes.logo} src={logo} href='/homepage' />
              </Grid>
              <Grid item>
                <Grid container justify={'center'}>
                  <Tabs
                    onChange={(event, value) => setValue(value)}
                    value={value}
                    aria-label='MyVote'
                  >
                    <Tab label={'MyProfile'} component={Link} to='/myprofile' />
                    <Tab label={'MySupport'} component={Link} to='/mysupport' />
                    <Tab
                      label={'MyElection'}
                      component={Link}
                      to='/myelection'
                    />
                  </Tabs>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
