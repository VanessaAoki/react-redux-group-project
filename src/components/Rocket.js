/* eslint-disable */
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDescription, flickrImages,
  } = props;

  return (
    <li id={rocketId} className="rocket-card-container">
      <img className="rocket-img" src={flickrImages} alt="rocket-img" />
      <div className="info-container">
        <h2 className="rocket-title">{rocketName}</h2>
        <p className="rocket-description">{rocketDescription}</p>
        <button id={rocketId} className="reserve-button">Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  data: PropTypes.shape({
    rocketId: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    rocketDescription: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;