import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/Rockets/Rockets-Reducer';

const RocketsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketStorage = useSelector((state) => state);
  console.log(rocketStorage.rocketsReducer);
  return (
    <>
      <h2>Rockets</h2>
      {/* <div>
        {rockets.map((rocket) => (
          <h1 key={rocket.id}>{rocket}</h1>
        ))}
      </div> */}
    </>
  );
};

export default RocketsList;
