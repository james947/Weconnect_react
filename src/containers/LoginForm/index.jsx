import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {}

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('https://weconnect-v3.herokuapp.com/api/v1/auth/login', this.state);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="auth-form col-md-4">
        <div className="panel panel-default">
          <div className="brand-name">WeConnect</div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="businessName">Email</label>
                <input type="text" className="form-control" onChange={this.onChange} value={data.email || ""} name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input type="password" className="form-control" onChange={this.onChange} value={data.password || ""} name="password" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Login</button>
            </form>
            <div className="link-auth">
              <Link to="/" style={{ textDecoration: "none" }}>Not yet registered?</Link>
            </div>
          </div>`
        </div>
      </div>
    );
  }
}

export default LoginForm;
