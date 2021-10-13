import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './Rockets/Rockets-Reducer';
import profileReducer from './Profile/Profile-Reducer';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rockets: rocketsReducer,
  profile: profileReducer,
  missions: missionsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
