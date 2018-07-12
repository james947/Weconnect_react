import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const EditForm = props => {
  const { data } = props.state;
  return (
    <div>
      <NavBar/>
      <div className="auth-form col-md-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={props.onSubmit}>
              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input type="text" className="form-control" onChange={props.onChange} value={data.businessname || ""} name="businessname" />
              </div>
              <div className="form-group">
                <label htmlFor="businessName">Description</label>
                <textarea className="form-control" onChange={props.onChange} value={data.description || ""} name="description" rows="3" id="comment" />
              </div>
              <div className="form-group">
                <label htmlFor="businessName">Category</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                  </div>
                  <select className="custom-select" onChange={props.onChange} value={data.category || ""} name="category">
                    <option selected>Choose...</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Housing">Housing</option>
                    <option value="Interior design">Interior design</option>
                    <option value="Photography">Photography</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Location</label>
                <input type="textArea" className="form-control" onChange={props.onChange} value={data.location || ""} name="location" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

EditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired,
};


export default EditForm;
