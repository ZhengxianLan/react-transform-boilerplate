import React from 'react';
import {
  IndexRoute,
  Route
} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Account from './Account';

export default (
  /*  这里 App 将 Home,About,Account 纳入自身子组件
      并且，切换由 react-router 负责
   */
  <Route  path='/' component={App} >
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/account' component={Account}/>
    <IndexRoute component={Home}/>
  </Route>
);