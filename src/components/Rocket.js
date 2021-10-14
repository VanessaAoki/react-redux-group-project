import { useDispatch } from 'react-redux';
import { reserveRockets } from '../redux/Rockets/Rockets-Reducer';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDescription, flickrImages, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserveRocket = (e) => {
    const reserveThisRocket = {
      id: e.target.id,
    };
    dispatch(reserveRockets(reserveThisRocket));
  };

  const rocketContainer = (
    <li id={rocketId} className="rocket-card-container">
      <img className="rocket-img" src={flickrImages} alt="rocket-img" />
      <div className="info-container">
        <h2 className="rocket-title">{rocketName}</h2>
        <p className="rocket-description">
          {reserved
            ? <span className="reserved-span">Reserved</span>
            : false}
          {' '}
          {rocketDescription}
        </p>
        <button
          type="button"
          id={rocketId}
          className={
        reserved
          ? 'reserved-button'
          : 'reserve-button'
      }
          onClick={reserveRocket}
        >
          {
        reserved
          ? 'Cancel Reservation'
          : 'Reserve Rocket'
      }
        </button>
      </div>
    </li>
  );

  return rocketContainer;
};

export default Rocket;
