const axios = require('axios');
const express = require('express');
const createVoterId = require('./createVoterId');


const newUserCreate = async (email, googleId, givenName, familyName) => {
  try {
    const voterInfo = await createVoterId();
    const { voter_device_id, voter_id, voter_we_vote_id } = voterInfo.data;

    await axios.post('/api/users/add', {
      voter_device_id,
      voter_id,
      voter_we_vote_id,
      email,
      googleId,
      givenName,
      familyName
    });

    console.info('success!!!!')
  } catch (err) {
    console.error('ERROR in newUserCreate', err);
  }



};

module.exports = newUserCreate;