import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/Rockets/Rockets-Reducer';
import './Rockets.css';
import Rocket from './Rocket';

const RocketsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketStorage = useSelector((state) => state);
  return (
    <>
      <h2>Rockets</h2>
      {rocketStorage.rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocketId={rocket.id}
          rocketName={rocket.rocket_name}
          rocketDescription={rocket.description}
          flickrImages={rocket.flickr_images}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
};

export default RocketsList;
