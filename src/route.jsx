import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignupPage from './components/SignupPage/SignupPage';
import Businesses from './components/Businesses';
import LoginPage from './components/LoginPage/index';


const Routes = () =>
  (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/businesses" component={Businesses} />
    </div>
  );

export default Routes;

