import React from 'react';

const ReviewsForm = (props) => (
  <div>
    <h5 className="card-header">Reviews <button type="button" className="btn btn-outline-primary btn-sm
    float-right"data-toggle="modal"data-target="#myModal">review</button> </h5>
    <div className="card">
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Review</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={props.onSubmit}>
                <p>{}</p>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={props.onChange} value={props.data.title || ""} name="title" placeholder="title..."/>
                </div>
                <div className="form-group">
                  <textarea rows="2" type="text" className="form-control" onChange={props.onChange} value={props.data.review || ""} name="review" placeholder="review..."/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-right">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default ReviewsForm;
