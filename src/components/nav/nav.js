import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container">
          <div className="nav__container__parnav">
            <div className="nav__container__parnav__brand">
              <NavLink to="/home">Home</NavLink>
            </div>
            <ul className="nav__container__parnav__ul">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/book">Book</NavLink></li>
            </ul>
            <div className="nav__container__parnav__user">
              <span id="user">user</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
