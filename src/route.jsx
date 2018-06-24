import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import Businesses from './components/Businesses';
import RegisterBusiness from './components/RegisterBusiness/BusinessForm';

const Routes = () =>
  (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/businesses" component={Businesses} />
      <Route exact path="/add_business" component={RegisterBusiness} />
    </div>
  );

export default Routes;
