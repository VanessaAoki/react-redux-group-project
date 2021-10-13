/* eslint-disable no-undef */
// Some default code

// Actions

const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 1: {
      return (
        newState
      );
    }

    case 2: {
      return newState;
    }
    case 3: {
      return action.state;
    }
    default:
      return state;
  }
};

export default reducer;

// Action Creators
