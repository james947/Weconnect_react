import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupForm from '../../components/SignupForm/SignupForm';
import { userSignupRequest } from '../../redux/actions/actions';

export const validate = (data) => {
  const errors = {};
  if (data.username.length < 3) errors.username = 'Username should not be atleast 3 characters';
  return errors;
};

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        email: '',
        password: ''
      },
      errors: {},
      loading: false

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(this.state.data);
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    console.log({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.userSignupRequest(this.state.data).then(data => {
        this.props.history.push('/login');
      })
        .catch(err => {
          console.log(err.request.status);
          if (err.request.status === 500) {
            this.setState({ errors: { message: 'Service is unavailable, please try again later' }, loading: false });
          } else {
            this.setState({ errors: err.response.data, loading: false });
          }
        });
    }
  };


  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  userSignupRequest: PropTypes.func.isRequired
};


//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  userSignupRequest
}, dispatch);


export default connect(null, mapDispatchToProps)(SignupPage);
