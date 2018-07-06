import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map(business => (
    <div className="card-deck row">
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

  ))
  return <ul>{options}</ul>
}

export default Suggestions