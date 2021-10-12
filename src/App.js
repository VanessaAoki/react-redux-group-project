import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Header from './components/Header';
import Rocket from './pages/Rockets-page';

function App() {
  return (
  // <Provider store={configureStore}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Rocket}></Route>
        {/* <Route path="/missions" component={Missions}></Route> */}
      </Switch>
    </Router>
  // </Provider>
  );
}

export default App;
