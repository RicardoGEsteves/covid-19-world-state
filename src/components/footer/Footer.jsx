import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.scss';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='copy'>
        <p>&copy; 2020 Ricardo Esteves</p>
      </div>
      <div className='links'>
        <a
          href='https://www.linkedin.com/in/ricardogesteves/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin color='#304357' size='2rem' />
        </a>
        <a
          href='https://github.com/RicardoGEsteves/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub color='#304357' size='2rem' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
