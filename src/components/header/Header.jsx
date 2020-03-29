import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import logo from '../../logo.png';

import './header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <nav className='header-container'>
      <div className='burger-container' onClick={handleClick}>
        <span className={!toggle ? 'burger' : 'burger toggled'} />
      </div>
      <span className={toggle ? 'menu-overlay' : ''} onClick={handleClick} />

      <ul className={!toggle ? 'nav-links' : 'nav-links toggled'}>
        <li className={toggle ? 'link' : 'LinksOut'}>
          <Link to='/' onClick={handleClick}>
            HOME
          </Link>
        </li>
        <li className={toggle ? 'link' : 'LinksOut'}>
          <Link to='/countries' onClick={handleClick}>
            COUNTRIES
          </Link>
        </li>
        <li className={toggle ? 'link' : 'LinksOut'}>
          <Link to='/info' onClick={handleClick}>
            INFO
          </Link>
        </li>

        <li className='platformLinks'>
          <a
            href='https://www.linkedin.com/in/ricardogesteves/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin color={toggle ? '#304357' : '#0a0e14'} size='2rem' />
          </a>
          <a
            href='https://github.com/RicardoGEsteves/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub color={toggle ? '#304357' : '#0a0e14'} size='2rem' />
          </a>
        </li>
      </ul>

      <ul className='desktop-nav-links'>
        <div className='logo-container'>
          <Link to='/' onClick={handleClick}>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className='links-container'>
          <li className='nav-link'>
            <Link to='/countries' onClick={handleClick}>
              COUNTRIES
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/info' onClick={handleClick}>
              INFO
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
