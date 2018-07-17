import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { addReviews } from '../../redux/actions/business';
import ReviewsForm from '../../components/ReviewsForm';

export const validate = data => {
  const errors = {};
  if (!data.title) errors.title = 'title is required';
  if (!data.review) errors.review = 'review is required';
  return errors;
};

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        review: ''
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
    console.log(this.state.data);
    const businessId = this.props.match.params.id;
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.addReviews(businessId, this.state.data).then(() => {
        this.props.fetchReviews()
      })
        .catch(err => {
          swal({ title: err.response.data.message });
          this.setState({ errors: err.response.data, loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <ReviewsForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          data ={this.state.data}
          errors = {this.state}
        />
      </div>

    );
  }
}

ReviewPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  userLoginRequest: PropTypes.func.isRequired,
  addReviews: PropTypes.func.isRequired
};


export default connect(null, { addReviews })(withRouter(ReviewPage));
