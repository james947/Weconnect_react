import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import Businesses from './components/Businesses';
import ForgotPassword from './containers/ForgotPassword';
import RegisterPage from './containers/RegisterBusiness';
import { TermsConditions } from './components/TermsAndConditions';
import ProfilePage from './containers/BusinessProfile/index';
import EditPage from './containers/EditForm';
import PasswordPage from './containers/PasswordPage';
import SearchBusiness from './containers/SeachBusiness';


const Routes = () =>
  (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/businesses" component={Businesses} />
      <Route exact path="/add-business" component={RegisterPage} />
      <Route exact path="/edit-business" component={EditPage} />
      <Route exact path="/terms" component={TermsConditions} />
      <Route exact path="/businesses/:id" component={ProfilePage} />
      <Route exact path="change-password" component={PasswordPage} />
      <Route exact path="/search" component={SearchBusiness} />
    </div>
  );

export default Routes;
