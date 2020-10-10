import React, { Component, useState } from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';
import MyBallot from './MyBallot.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import YourBallot from './YourBallot.jsx';

import { ballot_item_list } from './response.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MyElection = ({ ballotList }) => {
  const [myBallot, setMyBallot] = useState([]);
  const [myCandidates, setMyCandidates] = useState([]);

  const classes = useStyles();

  const updateMyBallot = candidate => {
    setMyCandidates([candidate, ...myCandidates]);
  };

  return (
    <div>
      <NavBar />
      <Greeting />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <MyBallot onChange={myCandidates} myCandidates={myCandidates} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <YourBallot
                updateMyBallot={candidate => updateMyBallot(candidate)}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MyElection;
