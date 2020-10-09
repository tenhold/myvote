import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Candidate from './Candidate.jsx';
import { ballot_item_list } from './response.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const parseBallot = () => {
  let ballotData = {};

  ballot_item_list.map(ballot => {
    if (ballotData[ballot.kind_of_ballot_item]) {
      ballotData[ballot.kind_of_ballot_item].push(ballot);
    } else {
      ballotData[ballot.kind_of_ballot_item] = [ballot];
    }
  });
  return ballotData;
};

const YourBallot = () => {
  const [ballotList, setBallotList] = useState([parseBallot()]);
  const classes = useStyles();
  const { OFFICE } = ballotList[0];

  return (
    <div className={classes.root}>
      {OFFICE.map(office => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>
              {office.ballot_item_display_name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {office.candidate_list.map((candidate, ind) => (
              <Typography>
                <Candidate candidate={candidate} ind={ind} />
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default YourBallot;
