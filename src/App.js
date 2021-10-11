import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import RocketList from './components/Rockets';
import MissionsLists from './components/Missions';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <RocketList />
        </Route>
        <Route exact path="/missions">
          <MissionsLists />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;

//! DO NOT FORGET TO CREDIT THE LOGO MAKER <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
