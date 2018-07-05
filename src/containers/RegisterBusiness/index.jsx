import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { create } from '../../redux/actions/business';
import BusinessForm from '../../components/RegisterBusiness/BusinessForm';


export const validate = (data) => {
  const errors = {};
  if (!data.businessname) errors.businessname = 'Businessname is required';
  if (!data.description) errors.description = 'description is required';
  if (!data.category) errors.category = 'category is required';
  if (!data.location) errors.location = 'location is required';
  return errors;
};

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        businessname: '',
        description: '',
        location: '',
        category: ''
      },
      errors: {},
      loading: false

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.create(this.state.data).then(() => {
        this.props.history.push('/businesses');
        swal('business registerd successfully', 'success');
      })
        .catch(err => {
          this.setState({ errors: err.response.data, loading: false });
        });
    }
  };


  render() {
    return (
      <div>
        <BusinessForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
        />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  create: PropTypes.func.isRequired
};


export default connect(null, { create })(RegisterPage);
