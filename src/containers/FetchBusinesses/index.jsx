import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getBusinesses, getBusiness } from '../../redux/actions/actions';

class FetchBusinesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      page: 1,
      total_pages: 2,
      search: {
        q: "",
        category: "",
        location: "",
      },
      searching: null
    };
  }


  componentWillMount() {
    axios.get('https://weconnect-v3.herokuapp.com/api/v1/businesses')
      .then(response => this.props.getBusinesses(response));
  }

  handleSearch = e => {
    this.setState({
      search: { ...this.state.search, [e.target.name]: e.target.value },
    }, () => {
      axios.get(`https://weconnect-v3.herokuapp.com/api/v1/businesses?q=${this.state.search.q}`)
        .then(response => this.props.getBusiness(response));
    });
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
          <div className="card-footer">
            <Link to={`businesses/${business.id}`} className="btn btn-success btn-sm float-right">View</Link>
          </div>
        </div>
      </div>


    ));

    return (
      <div className="wrapper customCard">
        <div className="row">
          <div className="col-md-10">
            <form className=""role="search">
              <div className="form-group">
                <input type="text" className="form-control" name="q" onSubmit={this.handleSearch} placeholder="Search"/>
              </div>
            </form>
          </div>
          { renderBusinesses }
        </div>
      </div>
    );
  }
}

// takes a piece of apps state and passes it as a prop to the component
const mapStateToProps = state => ({
  businesses: state.businesses

});

//Dipspatches actions to be used as props in this component
const mapDispatchToProps = dispatch => bindActionCreators({
  getBusinesses, getBusiness
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FetchBusinesses);
