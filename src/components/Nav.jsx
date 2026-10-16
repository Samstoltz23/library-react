import React from 'react';
import { FontAwesomeIcon } from 'fortawesome/fontawesome-svg-core';
import { faBars } from 'fortAwesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src="" alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link" />
            Home
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link" />
            Books
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>
      </div>
    </nav>
  )
    
  
}

export default Nav;