import React from 'react';

const Candidate = ({ candidate, ind }) => {
  const {
    ballot_item_display_name,
    ballotpedia_candidate_url,
    party,
    candidate_photo_url_medium,
    contest_office_name,
  } = candidate;
  return (
    <div className='Candidate' id={ind}>
      <img src={candidate_photo_url_medium}></img>
      <div>{ballot_item_display_name}</div>
      <div>{ballotpedia_candidate_url}</div>
      <div>{party}</div>
    </div>
  );
};

export default Candidate;
