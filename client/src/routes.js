import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Greetings from './components/Greetings';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import NewEventPage from './components/events/NewEventPage';
import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />" +
    <Route path="signup" component={ SignUpPage } />		
    <Route path="greetings" component={ Greetings } />
    <Route path="login" component={ LogInPage } />
    <Route path="new-event" components={ requireAuth(NewEventPage) } />
  </Route>
)