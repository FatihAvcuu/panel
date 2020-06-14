import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {UserProvider} from './context';
import PrivateRoute from './PrivateRoute';

import Index from './pages/indexPage'
import Login from './pages/login'

const routing = (
  <UserProvider>
  <Router>
    <div>
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/home' component={Index} />
    </div>
  </Router>
  </UserProvider>
)

ReactDOM.render(
  routing,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
