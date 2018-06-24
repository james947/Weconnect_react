import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import getBusinesses from '../../redux/actions/actions';

class FetchBusinesses extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log(this.props.businesses);
    axios.get('https://weconnect-v3.herokuapp.com/api/v1/businesses')
      .then(response => this.props.getBusinesses(response));
  }

  render() {
    const renderBusinesses = this.props.businesses.map(business => (
      <div className="card col-md-4" key={business.id}>
        <div className="card-body">
          <h5>{business.businessname}</h5>
          <p>{business.description}</p>
          <p>{business.category}</p>
          <p>{business.location}</p>
          <p>{business.created_at}</p>
          <Link to="/signup" className="btn btn-success btn-sm">View</Link>
        </div>
      </div>


    ));

    return (
      <div className="container customCard">
        <div className="row">
          { renderBusinesses }
        </div>
      </div>
    );
  }
}

// takes a piece of apps state and passes it as a prop to the component
const mapStateToProps = state => ({
  businesses: state.business.businesses
});

//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  getBusinesses
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FetchBusinesses);
