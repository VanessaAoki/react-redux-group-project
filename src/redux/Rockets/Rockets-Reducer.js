const GET_ROCKETS = 'SPACE_TRAVELER/ROCKETS/GET_ROCKETS';
const RESERVE_ROCKETS = 'SPACE_TRAVELER/ROCKETS/RESERVE_ROCKETS'

const URL = 'https://api.spacexdata.com/v3/rockets/';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.state;
    }
    case RESERVE_ROCKETS: {
      return action.state;
    }
    default:
      return state;
  }
};

export default reducer;

export const getRockets = () => async (dispatch) => {
  const response = await fetch(URL);
  const rocketsApi = await response.json();
  const state = [];
  rocketsApi.forEach((rocket) => {
    state.push({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    });
  });
  dispatch({
    type: GET_ROCKETS,
    state,
  });
};

export const reserveRocket = () => {
  dispatch({
    type: RESERVE_ROCKETS,
    state,
  });
}
