import React, { useEffect, useState } from 'react';
import axios from 'axios';

import getCandidateList from '../../server/helpers/candidateList';

import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';

import Candidate from './Candidate.jsx';
// import { ballot_item_list } from './response.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '15px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const YourBallot = ({ updateMyBallot, user }) => {
  const [ballotList, setBallotList] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { voter_device_id, address } = user;
  console.log('voter device, address outside of func!!!!!!!!!', !!voter_device_id, !!address, address);
  useEffect(() => {
    console.log('Hello??????????????????');
    // console.log(voter_device_id);
    // const testId =
    //   'w4HW8XnLRkQYEIvMxg9wT7pBdVSxfx4PczLl0anKCvFbV5EospeGR3P9Q6yPWkvnRMNU4y4YkCPPRTD1OyYhuhtq';
    if (voter_device_id) {
      loadCandidates();
    }
  }, [user]);

  const loadCandidates = async () => {
    try {
      const candidateList = await getCandidateList(voter_device_id, address);
      const { ballot_item_list } = candidateList.data;

      let ballotData = {};

        ballot_item_list.map(ballot => {
          if (ballotData[ballot.kind_of_ballot_item]) {
            ballotData[ballot.kind_of_ballot_item].push(ballot);
          } else {
            ballotData[ballot.kind_of_ballot_item] = [ballot];
          }
        });
        setBallotList([ballotData]);
        setIsLoading(false);
    }
    catch(err) {
      console.error(err);
    }
  }
  // const loadCandidates = () => {
  //   getCandidateList(voter_device_id, address)
  //     .then(data => {
  //       console.log('voter device, address inside func?????????', voter_device_id, address);
  //       const { ballot_item_list } = data.data;
    
  //       let ballotData = {};
  //       ballot_item_list.map(ballot => {
  //         if (ballotData[ballot.kind_of_ballot_item]) {
  //           ballotData[ballot.kind_of_ballot_item].push(ballot);
  //         } else {
  //           ballotData[ballot.kind_of_ballot_item] = [ballot];
  //         }
  //     })
  //     setBallotList([ballotData]);
  //     setIsLoading(false);
  //     })
  //     .catch(err => console.error(err));
  // }

  return (
    <div className={classes.root}>
      <h2>Your Local Ballot</h2>
      {isLoading && <h3>Loading Your Ballot...</h3>}
      {!ballotList.length && <h3>No Officials are Running in this Election</h3>}

      {!isLoading &&
        ballotList[0].OFFICE.map(office => (
          <Accordion
            expanded={expanded === office.id}
            onChange={handleChange(office.id)}
          >
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
              <Typography>
                {office.candidate_list.map((candidate, index) => (
                  <Candidate
                    candidate={candidate}
                    ind={index}
                    updateMyBallot={() => updateMyBallot(candidate)}
                  />
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default YourBallot;
