import React, { useState } from 'react';

import useData from '../../utils/useData';

import Spinner from '../../components/spinner/Spinner';
import Country from '../../components/country/Country';

import { GoSearch } from 'react-icons/go';

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

  return (
    <div className='countries-page-container'>
      {error && <p>Something went wrong, try again later</p>}
      {loading ? (
        <Spinner />
      ) : (
        <div className='countries-page-wrapper'>
          <div className='title-wrapper'>
            <h2 className='title'>All stats by country</h2>
            <p className='sub-title'>countries sorted by confirmed cases</p>
          </div>

          <div className='search-container'>
            <GoSearch color='#f2f4f7' size='1.8rem' />
            <input
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <ul className='countries-container'>
            {!loading &&
              filterCountries.map((el, index) => (
                <li key={index} className='country-wrapper'>
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
