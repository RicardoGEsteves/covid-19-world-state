import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <li>
          <Link to='/' onClick={handleClick}>
            home
          </Link>
        </li>
        <li>
          <Link to='/countries' onClick={handleClick}>
            countries
          </Link>
        </li>
        <li>
          <Link to='/info' onClick={handleClick}>
            info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
