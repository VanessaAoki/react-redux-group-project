import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import configureStore from './redux/configureStore';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import RocketList from './components/RocketsLists';
import MissionsLists from './components/MissionsLists';

function App() {
  return (
    <>
      <Provider store={configureStore}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={RocketList}>
            <RocketList />
          </Route>
          <Route path="/missions" component={MissionsLists}>
            <MissionsLists />
          </Route>
          <Route path="/profile" component={Profile}>
            <Profile />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;

//! DO NOT FORGET TO CREDIT THE LOGO MAKER <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
