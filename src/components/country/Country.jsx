import React from 'react';

import { activeStat, createRate } from '../../utils/createStats';

import './country.scss';

const Country = ({ country, confirmed, deaths, recovered }) => {
  const stats = { confirmed, deaths, recovered };

  const active = activeStat(stats);
  const deathsPercentage = createRate(confirmed, deaths);
  const recoveredPercentage = createRate(confirmed, recovered);
  const activePercentage = createRate(confirmed, active);

  return (
    <div className='country-container'>
      <h3>{country}</h3>

      <div className='stats-wrapper'>
        <p className='confirmed'>Confirmed: {confirmed}</p>
        <p className='deaths'>Deaths: {deaths}</p>
        <p className='deaths last'>{deathsPercentage} %</p>
        <p className='recovered'>Recovered: {recovered}</p>
        <p className='recovered last'>{recoveredPercentage} %</p>
        <p className='active'>Active: {active}</p>
        <p className='active'>{activePercentage} %</p>
      </div>
    </div>
  );
};

export default Country;
