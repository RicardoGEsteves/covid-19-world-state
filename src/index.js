import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={History} basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
