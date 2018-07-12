import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addReviews } from '../../redux/actions/business';
import PostReviews from '../../containers/PostReviews';


export const ReviewsDisplay = (props) => (
  <div>
    <div className="card">
      <PostReviews />
      {props.state.length !== 0 ?
        props.state.map((review) =>
          (<div className="card-body card-reviews">
            <p className="card-text"> <span className="badge badge-info">Reviewer </span> {review.reviewer}</p>
            <p className="card-text"> <span className="badge badge-info">Title </span> {review.title}</p>
            <p className="card-text"> <span className="badge badge-info">Review </span> {review.review}</p>
            <p className="card-text"> <span className="badge badge-info" /><small> {review.created_at}</small></p><hr/>
          </div>)) :
        "No reviews for this business"}

    </div>
  </div>

);

const mapDispatchToProps = dispatch => bindActionCreators({
  addReviews
}, dispatch);

export default connect(null, mapDispatchToProps)(ReviewsDisplay);

