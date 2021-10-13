import PropTypes from 'prop-types';

const Missions = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const { description } = data;

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
        <button type="button" className="button-join">
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
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Missions;
