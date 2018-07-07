import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBusiness } from '../../redux/actions/business';
import DeleteBusiness from '../../containers/DeleteBusiness';

const SideNav = (props) => (

  <div className="">
    <ul className="nav  flex-column">
      <h4>@<small>{props.state.owner}</small></h4>
      <li className="nav-item nav-pills">
        <Link className="nav-link active" to={`/businesses/${props.state.id}`}>Profile</Link>
      </li>
      <li className="nav-item">
       { props.isOwner ? <Link className="nav-link" to={{ pathname: '/edit-business', query: { business: props } }}>Edit Business</Link> : null}
      </li>
      { props.isOwner ?  <div><DeleteBusiness id={props.state.id}/></div>: null}
    </ul>
  </div>


);


SideNav.propTypes = {
  isAunthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    isOwner: !state.businesses.owner
  };
}

//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteBusiness
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
