import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePassword } from '../../redux/actions/user_auth';
import ChangePasswordForm from '../../components/ChangePassword';


export const validate = data => {
  const errors = {};
  if (!data.email) errors.email = 'Email is required';
  return errors;
};

class PasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
        newPassword: ''
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
      this.props.changePassword(this.state.data).then(() => {
        this.props.history.push('/dashboard');
      })
        .catch(err => {
          this.setState({ errors: err.response.data, loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <ChangePasswordForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state ={this.state}
        />
      </div>

    );
  }
}

PasswordPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  resetPassword: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired
};


export default connect(null, { changePassword })(PasswordPage);
