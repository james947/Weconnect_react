import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBusiness } from '../../redux/actions/business';

const SideNav = (props) => (

  <div className="">
    <ul className="nav  flex-column">
      <h4>@<small>{props.state.owner}</small></h4>
      <li className="nav-item nav-pills">
        <Link className="nav-link active" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={{ pathname: '/edit-business', query: { business: props } }}>Edit Business</Link>
      </li>
      <li className="nav-item">
        <button className="btn" onClick={ () => props.deleteBusiness(props.state.id) } >Delete Business</button>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/change-password">Change Password</Link>
      </li>
    </ul>

  </div>


);

SideNav.propTypes = {
  deleteBusiness: PropTypes.bool.isRequired
};

//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteBusiness
}, dispatch);

export default connect(null, mapDispatchToProps)(SideNav);
