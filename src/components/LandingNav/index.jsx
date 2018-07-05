import React from 'react';
import { Link } from 'react-router-dom';

const LandingNav = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="#">WeConnect</Link>
      </div>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navMenu" >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ml-auto">
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>

);

export default LandingNav;
