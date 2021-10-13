import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../redux/missions/missions';
import Missions from './Missions';

const MissionsLists = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const loadMissionsAction = bindActionCreators(loadMissionsData, dispatch);

  useEffect(() => {
    loadMissionsAction();
    return null;
  }, []);

  return (
    <>
      <table className="list-container">
        <tr>
          <th>
            Mission
          </th>
          <th>
            Description
          </th>
          <th>
            Status
          </th>
          <th aria-label="none" />
        </tr>
        {missions.map((mission) => (
          <Missions key={missions.id} data={mission} />
        ))}
      </table>
    </>
  );
};

export default MissionsLists;
