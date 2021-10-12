import React from 'react';
import './Profile.css';

const Profile = () => (
  <div className="profile-container">
    <section className="profile-missions">
      <h2>My Missions</h2>
      <ul className="profile-table">
        <li>Falcon 9</li>
        <li>Falcon 9</li>
        <li>Falcon 9</li>
      </ul>
    </section>
    <section className="profile-rockets">
      <h2>My Rockets</h2>
      <ul className="profile-table">
        <li>Telstar</li>
        <li>Telstar</li>
        <li>Telstar</li>
      </ul>
    </section>
  </div>
);

export default Profile;
