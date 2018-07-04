import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const { data, errors, loading } = props.state;
  return (
    <div className="signup">
      <div className="auth-form col-md-4">
        <div className="panel panel-default">
          <div className="brand-name">WeConnect</div>
          <div className="panel-body">
            <form onSubmit={props.onSubmit} loading={loading}>
              <div className="form-group">
                <label htmlFor="businessName">Email</label>
                <p className="errors">{ errors.message }</p>
                <p className="errors" >{errors.email}</p>
                <input type="text" className="form-control" onChange={props.onChange} value={data.email || ""} name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password</label>
                <p className="errors" >{errors.password}</p>
                <input type="password" className="form-control" onChange={props.onChange} value={data.password || ""} name="password" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Login</button>
            </form>
            <div className="link-auth">
              <Link to="/signup" style={{ textDecoration: "none" }}>Not yet registered?</Link> <br/>
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired
};

export default LoginForm;

