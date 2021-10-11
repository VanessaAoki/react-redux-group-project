import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav className="panel-bg">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            exact
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </nav>
  );
};

export default NavBar;
