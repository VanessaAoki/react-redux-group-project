import PropTypes from 'prop-types';

const Missions = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const { description } = data;

  return (
    <tr>
      <td>
        {missionName}
      </td>
      <td>
        {description}
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
