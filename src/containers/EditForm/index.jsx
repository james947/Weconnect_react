import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import EditForm from '../../components/EditForm';
import { editBusiness } from '../../redux/actions/business';


export const validate = (data) => {
  const errors = {};
  return errors;
};

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        businessname: '',
        description: '',
        location: '',
        category: ''
      },
      errors: {}

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (!this.props.location.query) {
      window.location.assign('/businesses');
    }
    const data = this.props.location.query.business.state;
    this.setState({
      data: {
        ...this.state.data,
        businessname: data.businessname,
        category: data.category,
        description: data.description,
        location: data.location,
        id: data.id
      }
    });
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
      this.props.editBusiness(this.state.data, this.state.data.id).then(() => {
        this.props.history.push('/businesses');
        swal("business successfully edited", "success");
      })
        .catch(err => {
          console.log(err);
          swal({ title: err.response.data.message });
        });
    }
  };


  render() {
    return (
      <div>
        <EditForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
        />
      </div>
    );
  }
}

EditPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  editBusiness: PropTypes.func.isRequired
};

export default connect(null, { editBusiness })(EditPage);
