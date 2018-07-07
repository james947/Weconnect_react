import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getBusinesses } from '../../redux/actions/business';
import SearchBusiness from '../SearchBusiness';

class FetchBusinesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentWillMount() {
    this.props.getBusinesses();
  }
  

  render() {
    const { businesses, filteredBusinesses } = this.props;
    let container;
    if(filteredBusinesses.length === 0){
      container = businesses
    }else{
      container =  filteredBusinesses
    }
    
    const renderBusinesses = container.map(business => (
      <div className="card-deck">
        <div className="card" key={business.id}>
          <div className="card-header bg-transparent">{business.businessname}</div>
          <div className="card-body">
            <p className="card-text">Category {business.category}</p>
            <p className="card-text">Description {business.description}</p>
            <p className="card-text">Location {business.location}</p>
          </div>
          <div className="card-footer">
            <Link to={`businesses/${business.id}`} className="btn btn-success btn-sm float-right">View</Link>
          </div>
        </div>
      </div>


    ));

    return (
      <div className="wrapper customCard">
        <div className="row">
          { renderBusinesses }
        </div>
      </div>
    );
  }
}

// takes a piece of apps state and passes it as a prop to the component
const mapStateToProps = state => ({
  businesses: state.businesses,
  filteredBusinesses : state.filteredBusinesses

});

//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  getBusinesses
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FetchBusinesses);
