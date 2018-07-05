import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import LoginForm from '../../components/LoginForm';
import { userLoginRequest } from '../../redux/actions/user_auth';

export const validate = data => {
  const errors = {};
  if (!data.email) errors.email = 'Email is required';
  if (!data.password) errors.password = 'password is required';
  return errors;
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
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
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.userLoginRequest(this.state.data).then(() => {
        this.props.history.push('/businesses');
        swal("Logged in successfully", "success");
      })
        .catch(err => {
          this.setState({ errors: err.response.data, loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state ={this.state}
        />
      </div>

    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  userLoginRequest: PropTypes.func.isRequired
};


export default connect(null, { userLoginRequest })(LoginPage);
