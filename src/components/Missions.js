import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions } from '../redux/missions/missions';

const Missions = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const id = data.mission_id;
  const { description } = data;
  const dispatch = useDispatch();

  const joinMissionsButton = () => {
    dispatch(joinMissions(id));
  };

  return (
    <tr>
      <td>
        <b>{missionName}</b>
      </td>
      <td>
        {description}
      </td>
      <td className="button-container">
        <button type="button" className="button-status">
          <span>
            NOT A MEMBER
          </span>
        </button>
      </td>
      <td className="button-container">
        <button type="button" className="button-join" onClick={joinMissionsButton}>
          <span>
            Join Mission
          </span>
        </button>
      </td>
    </tr>
  );
};

Missions.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool,
  }).isRequired,
};

export default Missions;
