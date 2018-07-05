import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';


const SignupForm = (props) => {
  const { data, errors } = props.state;
  return (
    <div>
      <div className="signup">
        <div className="auth-form col-md-4">
          <div className="panel panel-default">
            <div className="brand-name">WeConnect</div>
            <div className="panel-body">
              <form onSubmit={props.onSubmit}>
                <div className="form-group">
                  <label htmlFor="businessName">Email</label>
                  <p className="errors">{ errors.message }</p>
                  <p className="errors" >{errors.email}</p>
                  <input type="text" className="form-control" onChange={props.onChange} value={data.email || ""} name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="businessName">Username</label>
                  <p className="errors" >{errors.username}</p>
                  <input type="text" className="form-control" onChange={props.onChange} value={data.username || ""} name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <p className="errors" >{errors.password}</p>
                  <input type="password" className="form-control" onChange={props.onChange} value={data.password || ""} name="password" />
                </div>
                <button type="submit" className="btn btn-success btn-block">Get Started</button>
              </form>
              <div className="link-auth">
                <Link to="/login" style={{ textDecoration: "none" }}>Already have an Account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired
};


export default SignupForm;
