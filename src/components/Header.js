import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/planet-logo.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-menu">
        <img className="logo" src={logo} alt="logo" />
        <h1>Space Traveler&apos; Hub</h1>
        <ul className="menu-container">
          <Link to="/">
            <li className="menu-li">Rockets</li>
          </Link>
          <Link to="missions/">
            <li className="menu-li">Missions</li>
          </Link>
          <Link to="my-profile/">
            <li className="menu-li">My Profile</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
