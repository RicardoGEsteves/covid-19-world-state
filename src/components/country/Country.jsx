import React from 'react';

import useData from '../../utils/useData';

import formatDate from '../../utils/formatDate';
import createActive from '../../utils/createActive';

import Spinner from '../../components/spinner/Spinner';

import './country.scss';

const Country = ({ country }) => {
  const { state, loading, error } = useData(
    `https://covid19.mathdro.id/api/countries/${country}`
  );

  const formatter = !error && formatDate(loading, state);
  const active = !error && createActive(loading, state);

  return (
    <div className='country-container'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p> {country}: Doesn't have any registered cases until now</p>
      ) : (
        <div>
          <p>Country: {country}</p>
          <p>Confirmed: {state.confirmed.value}</p>
          <p>Deaths: {state.deaths.value}</p>
          <p>Recovered: {state.recovered.value}</p>

          <div>
            <p>Active: {active}</p>
            <h5>Last Update</h5>
            <span>Data: {formatter[0]} </span>
            <span>Hora: {formatter[1]} </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
