import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/home/HomePage';
import CountriesPage from './pages/countries/CountriesPage';
import InfoPage from './pages/info/InfoPage';

import './app.scss';

const App = () => {
  return (
    <div className='app-container'>
      <div className='header'>
        {' '}
        <Header />
      </div>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/countries' component={CountriesPage} />
          <Route path='/info' component={InfoPage} />
        </Switch>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
