import React from 'react';
import { GoInfo } from 'react-icons/go';

import './info.scss';
const InfoPage = () => {
  return (
    <div className='info-container'>
      <div className='info-message'>
        <GoInfo color='#f2f4f7' size='6rem' />
        <p>
          This application received global data from Johns Hopkins Coronavirus
          Resource Center (JHU CSSE) as-a-service.
          <br />
          The reason behind the creation of this web app is merely informative
          and without any interest or profitable funds. with the unfolding of
          this terrible situation, I think it's up to us to do everything
          possible to avoid the worst, and contribute in the way that we can,
          and this is one of my forms of contribution.
          <br />
          The information nowadays it is everything, the more there is as long
          as it is reliable the better.
        </p>
      </div>
      <div className='other-info'>
        <p className='info'>More information about coronavirus</p>
        <p className='location'>Worldwide:</p>
        <a
          href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'
          target='_blank'
          rel='noopener noreferrer'
        >
          OMS Novel Coronavirus 2019
        </a>
        <p className='location'>Portugal:</p>
        <a
          href='https://covid19.min-saude.pt/'
          target='_blank'
          rel='noopener noreferrer'
        >
          DGS SNS Novel Coronavirus 2019
        </a>
      </div>
    </div>
  );
};

export default InfoPage;
