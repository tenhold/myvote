import React, { useState } from 'react';
import moment from 'moment';

const ElectionCountdown = () => {
  const daysUntilElection = () => {
    const today = new Date();
    let presElection = new Date(today.getFullYear(), 10, 3);
    if (today.getMonth() === 10 && today.getDate() > 3) {
      presElection.setFullYear(presElection.getFullYear() + 1);
    }
    let one_day = 1000 * 60 * 60 * 24;

    let daysAway = Math.ceil(
      (presElection.getTime() - today.getTime()) / one_day
    );
    return `${daysAway} days left until the United States Presidential Election!`;
  };

  return (
    <div className='election-countdown'>
      <div style={{ textAlign: 'center' }}>
        <div className='title'>
          <h2>{daysUntilElection()}</h2>
          <h1>Tuesday, November 3, 2020</h1>
        </div>
      </div>
    </div>
  );
};

export default ElectionCountdown;
