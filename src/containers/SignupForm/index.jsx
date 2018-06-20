import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(this.state.data);
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('https://weconnect-v3.herokuapp.com/api/v1/auth/register', this.state);
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
                <label htmlFor="businessName">Username</label>
                <input type="text" className="form-control" onChange={this.onChange} value={data.username || ""} name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input type="password" className="form-control" onChange={this.onChange} value={data.password || ""} name="password" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Get Started</button>
            </form>
            <div className="link-auth">
              <Link to="/" style={{ textDecoration: "none" }}>Already have an Account?</Link>
            </div>
          </div>`
        </div>
      </div>
    );
  }
}

export default SignupForm;
