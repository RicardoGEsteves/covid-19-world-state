import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [mobile, setMobile] = useState(false)

  return (
    <div className='header-container'>
      <div className='burger-container' onClick={() => setToggle(!toggle)}>
        <span className={!toggle ? 'burger' : 'burger toggled'} />
      </div>
      {toggle && (
        <>
          <Link to='/'>home</Link>
          <Link to='/countries'>countries</Link>
          <Link to='/info'>info</Link>
        </>
      )}
    </div>
  );
};

export default Header;
