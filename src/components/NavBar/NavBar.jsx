import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogoutRequest } from '../../redux/actions/user_auth';

// destructure into method signature
const NavBar = ({ isAunthenticated, logout }) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand"to="/">WeConnect</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/businesses">Businesses</Link>
        </li>
        <li className="nav-item">
        {isAunthenticated ? <Link className="nav-link" to="/add-business">Add Business</Link> : null }
        </li>
        <li className="nav-item">
          {isAunthenticated ? <Link className="nav-link" to="/login" onClick={() => logout()}>Logout</Link> : <Link className="nav-link" to="">Login</Link>}

        </li>
      </ul>
    </div>
  </nav>

);

NavBar.propTypes = {
  isAunthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    isAunthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: userLogoutRequest })(NavBar);
