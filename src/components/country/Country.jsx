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
      <div>
        <div>
          <h3>{country}</h3>
        </div>

        <div>
          <div>
            <p>Confirmed: {confirmed}</p>
          </div>

          <div>
            <ul>
              <li>Deaths: {deaths}</li>
              <li>{deathsPercentage} %</li>
            </ul>

            <ul>
              <li>Recovered: {recovered}</li>
              <li>{recoveredPercentage} %</li>
            </ul>

            <ul>
              <li>Active: {active}</li>
              <li>{activePercentage} %</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
