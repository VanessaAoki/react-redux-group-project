import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Header from './components/Header';

function App() {
  return (
  // <Provider store={configureStore}>
    <Router>
      <Header />
      <Switch>
        {/* <Route path="" exact component={Home}></Route>
        <Route path="" component={CategoriesPage}></Route> */}
      </Switch>
    </Router>
  // </Provider>
  );
}

export default App;
