import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResetPasswordForm from '../../components/ForgotPassword';
import { resetPassword } from '../../redux/actions/user_auth';


export const validate = data => {
  const errors = {};
  if (!data.email) errors.email = 'Email is required';
  return errors;
};

class resetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
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
      this.props.resetPassword(this.state.data).then(() => {
        this.props.history.push('/login');
      })
        .catch(err => {
          this.setState({ errors: err.response.data, loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <ResetPasswordForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state ={this.state}
        />
      </div>

    );
  }
}

resetPasswordPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  resetPassword: PropTypes.func.isRequired
};


export default connect(null, { resetPassword })(resetPasswordPage);
