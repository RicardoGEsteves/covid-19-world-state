import React, { useState } from 'react';

import useData from '../../utils/useData';

import Spinner from '../../components/spinner/Spinner';
import Country from '../../components/country/Country';

import './countriesPage.scss';

const CountriesPage = () => {
  const { state, loading, error } = useData(
    'https://covid19.mathdro.id/api/countries'
  );

  const [search, setSearch] = useState('');

  const filterCountries =
    !loading &&
    Object.entries(state.countries).filter(([country]) =>
      country.toLowerCase().includes(search.toLowerCase())
    );

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
              filterCountries.map(([country]) => (
                <li key={country}>
                  <Country country={country} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountriesPage;
