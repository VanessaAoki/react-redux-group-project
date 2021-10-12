import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/planet-logo.png';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-menu">
      <img className="logo" src={logo} alt="logo" />
      <h1>Space Traveler&apos; Hub</h1>
      <ul className="menu-container">
        {links.map((link) => (
          <li className="menu-li" key={link.id}>
            <NavLink
              to={link.path}
              exact
              className="menu-li"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
