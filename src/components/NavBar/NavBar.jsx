import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand"to="/">WeConnect</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link"to="/">Profile</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link"to="/">View Business</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link"to="/add_business">New Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled"to="/">Logout</Link>
        </li>
      </ul>
    </div>
  </nav>

);

export default NavBar;
