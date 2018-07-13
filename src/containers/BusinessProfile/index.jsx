import React, { Component } from 'react';
import axios from 'axios';
import BusinessesProfile from '../../components/BusinessProfile';
import swal from 'sweetalert';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      reviews: []
    };
  }

  componentDidMount() {
    axios.get(`https://weconnect-v3.herokuapp.com/api/v1/businesses/${this.props.match.params['id']}`)
      .then(response => this.setState({ data: response.data }))

      .catch(err=>{
        swal(err.response.data.message)
        window.location.assign('/businesses')     
  
      })
      
      this.fetchReviews();

  }

  fetchReviews = () => {
    axios.get(`https://weconnect-v3.herokuapp.com/api/v1/businesses/${this.props.match.params['id']}/reviews`)
      .then(response => this.setState({ reviews: response.data }))
  }
  
  render() {
    return (
      <BusinessesProfile fetchReviews={ this.fetchReviews } state={this.state}/>


    );
  }
}

export default ProfilePage;
