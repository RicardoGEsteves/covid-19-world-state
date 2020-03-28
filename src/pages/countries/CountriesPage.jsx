import React, { useState } from 'react';

import useData from '../../utils/useData';

import Spinner from '../../components/spinner/Spinner';
import Country from '../../components/country/Country';

import './countriesPage.scss';

const CountriesPage = () => {
  const { state, loading, error } = useData(
    'https://covid19.mathdro.id/api/confirmed'
  );

  const [search, setSearch] = useState('');

  const filterCountries =
    !loading &&
    state
      .sort((a, b) => b.confirmed - a.confirmed)
      .filter(el =>
        el.countryRegion.toLowerCase().includes(search.toLowerCase())
      );

  console.log('countries', filterCountries);

  return (
    <div className='countries-page-container'>
      {error && <p>Something went wrong, try again later</p>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <input
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <ul>
            {!loading &&
              filterCountries.map((el, index) => (
                <li key={index}>
                  <Country
                    country={el.combinedKey}
                    confirmed={el.confirmed}
                    deaths={el.deaths}
                    recovered={el.recovered}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountriesPage;
