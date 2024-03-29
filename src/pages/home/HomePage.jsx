import React from 'react';

import useData from '../../utils/useData';
import formatDate from '../../utils/formatDate';
import createActive from '../../utils/createActive';

import Spinner from '../../components/spinner/Spinner';

import './homePage.scss';

const HomePage = () => {
  const { state, loading, error } = useData('https://covid19.mathdro.id/api');

  const formatter = formatDate(loading, state);

  const active = createActive(loading, state);

  return (
    <div className='home-page-container'>
      {error && <p>Something went wrong, try again later</p>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Covid-19 World state</h1>

          <div className='statsWrapper'>
            <div className='confirmedWrapper'>
              <h3>Confirmed</h3>
              <span>{state.confirmed.value}</span>
            </div>

            <div className='deathsWrapper'>
              <h3>Deaths</h3>
              <span>
                {' '}
                <span>{state.deaths.value}</span>{' '}
              </span>
            </div>

            <div className='recoveredWrapper'>
              <h3>Recovered</h3>
              <span>{state.recovered.value}</span>
            </div>

            <div className='activeWrapper'>
              <h3>Active</h3>
              <span>{active}</span>
            </div>
          </div>

          <div className='dateWrapper'>
            <h5>Last Update</h5>
            <span>Date: {formatter[0]} </span>
            <span>Time: {formatter[1]} </span>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
