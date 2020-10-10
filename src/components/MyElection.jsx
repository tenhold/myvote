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

const MyElection = () => {
  const [myCandidates, setMyCandidates] = useState([]);

  const classes = useStyles();

  const updateMyBallot = candidate => {
    setMyCandidates([candidate, ...myCandidates]);
  };

  const removeCandidate = (id, e) => {
    e.preventDefault();
    const candidateRemove = myCandidates.filter(
      candidate => candidate.id !== id
    );
    setMyCandidates(candidateRemove);
  };

  return (
    <div>
      <NavBar />
      <Greeting />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h2>Your Saved Ballot</h2>
              {!myCandidates.length ? (
                <div>Add to your Ballot</div>
              ) : (
                myCandidates.map((candidate, ind) => (
                  <MyBallot
                    key={ind}
                    candidate={candidate}
                    removeCandidate={(id, e) => removeCandidate(id, e)}
                  />
                ))
              )}
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
