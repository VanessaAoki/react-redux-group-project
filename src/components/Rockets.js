import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GetRockets from '../redux/Rockets/Rockets-Reducer';

const RocketsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('hi');
    dispatch(GetRockets());
  }, []);
  console.log('hi2');
  return (
    <h2>Rockets</h2>
  );
};

export default RocketsList;
