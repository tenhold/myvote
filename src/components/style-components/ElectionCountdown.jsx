import React from 'react';
import CountdownTimer from 'react-component-countdown-timer';
import 'react-component-countdown-timer/lib/styles.css';

const ElectionCountdown = () => {
  return (
    <div className='election-countdown'>
      <div style={{ textAlign: 'center' }}>
        <div className='title'>
          <h1>The General Election is in:</h1>
        </div>

        <CountdownTimer
          count={264}
          showTitle
          border
          noPoints
          color='#27bf65'
          size={30}
          labelSize={40}
          direction='right'
          onEnd={() => {}}
        />
      </div>
    </div>
  );
};

export default ElectionCountdown;
