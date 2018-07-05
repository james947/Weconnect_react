import React, { Component } from 'react';
import axios from 'axios';

class FetchReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentdidMount() {
    axios.get('https://weconnect-v3.herokuapp.com/api/v1/businesses')
      .then(response => this.props.reviews(response));
  }

  render() {
    const renderBusinesses = this.props.businesses.map(business => (
      <div className="card-deck">
        <div className="card" key={business.id}>
          <div className="card-header bg-transparent">{business.businessname}</div>
          <div className="card-body">
            <p className="card-text">Category {business.category}</p>
            <p className="card-text">Description {business.description}</p>
            <p className="card-text">Location {business.location}</p>
          </div>
          <div className="card-footer" />
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


export default FetchReviews;
