import React from 'react';
// import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
// import './index.css';


const BusinessForm = () => {
  // const { data } = props.state;
  return (
    <div>
      <NavBar/>
      <div className="">
        <div className="auth-form col-md-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="businessName">Business Name</label>
                  <input type="text" className="form-control" onChange="" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="businessName">Description</label>
                  <input type="text" className="form-control" name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="businessName">Category</label>
                  <input type="text" className="form-control" name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Location</label>
                  <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>Nairobi</option>
                    <option>Kisumu</option>
                    <option>Eldoret</option>
                    <option>Meru</option>
                    <option>Nyeri</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// BusinessForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   state: PropTypes.shape({}).isRequired
// };


export default BusinessForm;
