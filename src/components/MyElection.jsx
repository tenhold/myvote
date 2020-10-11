import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../components/style-components/NavBar.jsx';
import MyBallot from './MyBallot.jsx';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import YourBallot from './YourBallot.jsx';
import { saveCandidates } from '../../server/helpers/saveCandidates';

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
// const voter_id = '266077';

const MyElection = ({ user }) => {

  // CHANGE THIS BACK WHEN PROPS ARE BEING PASSED AROUND!!!!!!! 
  const { voter_id } = user;

  // console.log('user in my election!!!', user)

  const [myCandidates, setMyCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trickState, setTrickState] = useState('');

  const classes = useStyles();

  useEffect(() => {
    getDb();
  }, []);

  const getDb = () => {
    axios.get(`/api/ballots/${voter_id}`)
    .then(data => {
      const mapCandidate = data.data.map(candidate => candidate);
      setMyCandidates(mapCandidate.reverse());
      setIsLoading(false);
    });
  };
  
  const updateMyBallot = candidate => {
    
    ////////// save candidates to db //////////////
    saveCandidates(candidate, voter_id);
    setMyCandidates([candidate, ...myCandidates]);
  };

  const removeCandidate = (id, e) => {
    console.log('remove cand', id)
    axios.delete(`/api/ballots/${id}`)
    e.preventDefault();
    const candidateRemove = myCandidates.filter(  
      candidate => candidate.contest_office_id !== id

      // remove from the database
    );
    setMyCandidates(candidateRemove);
  };
  console.log('state in myElection', myCandidates)
  return (
    <div className='container'>
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h2>Your Saved Ballot</h2>
              {isLoading && <div>Loading Candidates</div>}
              {!myCandidates.length ? (
                <div>Add to your Ballot</div>
              ) : (
                !isLoading && myCandidates.map((candidate, ind) => (
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
                user={user}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MyElection;
