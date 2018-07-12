import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBusiness }  from '../../redux/actions/business';

export class DeleteBusiness extends Component {
static propTypes = {
  business_id: PropTypes.string,
  actions: PropTypes.object
}




handleSave = () => {
  this.props.deleteBusiness(this.props.id);

}

render() {
  return (
   <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Delete Business
    </button>
   
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Confirm Delete</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete this business?</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger" onClick={this.handleSave}>Delete</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
}




export default connect(null,{deleteBusiness})(DeleteBusiness);
