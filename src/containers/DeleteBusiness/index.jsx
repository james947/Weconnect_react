import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBusiness }  from '../../redux/actions/business';

class DeleteBusiness extends Component {
static PropTypes = {
  business_id: PropTypes.string,
  actions: PropTypes.object
}




handleSave = () => {
  this.props.deleteBusiness(this.props.id);

}

render() {
  return (
   <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Delete Business
    </button>
   
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Confirm Delete</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4>Are you sure you want to delete this business?</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" onClick={this.handleSave}>Delete</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
}




export default connect(null,{deleteBusiness})(DeleteBusiness);
