import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Link,
  Grid,
} from '@material-ui/core';
import { Image } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  marginAutoItem: {
    margin: 'auto',
  },
});

const MyBallot = ({ candidate, removeCandidate }) => {
  const [myCandidates, setCandidates] = useState();

  const classes = useStyles();

  const {
    ballot_item_display_name,
    ballotpedia_candidate_url,
    party,
    candidate_photo_url_medium,
    contest_office_name,
    contest_office_id,
  } = candidate;

  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <Grid container spacing={1}>
          <Grid item xs={12} spacing={1}>
            <CardContent id={contest_office_id}>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                {party}
              </Typography>

              <Avatar
                className={classes.marginAutoItem}
                src={candidate_photo_url_medium}
              />

              <Link href={ballotpedia_candidate_url}>
                {ballot_item_display_name}
              </Link>

              <Typography className={classes.pos} color='textSecondary'>
                {contest_office_name}
              </Typography>
              <Typography variant='body2' component='p'></Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.marginAutoItem}
                size='small'
                color='secondary'
                variant='outlined'
                onClick={e => removeCandidate(contest_office_id, e)}
              >
                Remove from your ballot
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default MyBallot;
