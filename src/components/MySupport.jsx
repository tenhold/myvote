import React from 'react';
import PageNavBar from '../components/style-components/PageNavBar.jsx';
import whiteHouse from '../../assets/constitution.jpg';
const MySupport = () => {
  const styles = {
    root: {
      margin: '10px auto',
      padding: '20px',
      maxWidth: 500,
      maxHeight: 300,
    },
    header: {
      backgroundImage: `url(${whiteHouse})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
  };
  return (
    <div className='container' style={styles.header}>
      <PageNavBar />
      <div className='resources' style={styles.content}>
        <h4 className='center'>MySupport</h4>
        <center>Enter column here</center>
        <ul>
          <li>
            <a href='https://rideshare2vote.com/request-a-ride/#webrequest'>
              Find MyRide
            </a>
          </li>
          <li>
            <a href='https://www.headcount.org/verify-voter-registration/?source=HChomepage'>
              Check MyRegistration
            </a>
          </li>
          <li>
            <a href='https://www.headcount.org/registertovote/?source=HChomepage'>
              Register To Vote
            </a>
          </li>
          <li>
            <a href='https://www.vote.org/covid-19/'>COVID-19 Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySupport;
