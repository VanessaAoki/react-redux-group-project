import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <App />
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
