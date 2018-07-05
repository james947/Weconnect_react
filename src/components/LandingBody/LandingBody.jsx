import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';


const LandingBody = () => (
  <div>
    <div className="row">
      <div className="text-align-center offset-md-2 col-md-8">
        <h1>WELCOME TO WECONNECT</h1>
        <h5>WEConnect is a platform that enables you to register your business and connect with other businesses</h5>
      </div>
      <div id="landingPage" className="btn-group actions">
        <Link to="businesses"className="btn btn-primary btn-lg">Try now</Link>
        <Link to="login"className="btn btn-primary btn-lg">Login</Link>
        <Link to="signup"className="btn btn-primary btn-lg">Register</Link>
      </div>
    </div>
  </div>
);

export default LandingBody;
