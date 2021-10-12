// Actions
const GET_ROCKETS = 'Store/Rockets/GET_ROCKETS';

const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];
// Reducer
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_ROCKETS: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const GetRockets = () => async (dispatch) => {
  const response = await fetch(URL,
    {
      method: 'GET',
    });
  const rocketsAPI = response.json();
  console.log(rocketsAPI);
  // const keys = Object.keys(rocketsAPI);
  const state = [];
  // keys.forEach((key) => {
  //   state.push({ ...rocketsAPI[key][0], item_id: key });
  // });
  dispatch({
    type: GET_ROCKETS,
    state,
  });
};
