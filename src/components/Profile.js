import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rocketStorage = useSelector((state) => state);

  const joinedMissions = missions.filter((mission) => {
    if (mission.status === true) {
      return mission;
    }
    return null;
  });

  return (
    <div className="profile-container">
      <section className="profile-missions">
        <h2>My Missions</h2>
        <ul className="profile-table">
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </section>
      <section className="profile-rockets">
        <h2>My Rockets</h2>
        <ul className="profile-table">
          {rocketStorage.rockets.map((rocket) => {
            if (rocket.reserved === true) {
              return (
                <li>{rocket.rocket_name}</li>
              );
            }
            return false;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
