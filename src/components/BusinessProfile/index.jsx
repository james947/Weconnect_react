import React from 'react';
import SideNav from '../SideNavBar';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ReviewsDisplay from '../BusinessReviews/index';


const BusinessProfile = (props) => {
  const { data, reviews } = props.state;

  return (
    <div>
      <NavBar/>
      <div className="row content SideNav container">
        <div className="col-md-3 jumbotron">
          <SideNav state={data}/>
        </div> {/*end-of-col-md-SideNav-jumbotron*/}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              Profile
            </div>
            <div className="card-body ProfileCard">
              <h5>Business Name</h5><small><p>{data.businessname}</p></small>
              <h5>Description</h5><small><p>{data.description}</p></small>
              <h5>Category</h5><small><p>{data.category}</p></small>
              <h5>Location</h5><small><p>{data.location}</p></small>
            </div>
          </div>
        </div> {/*end-of-col-md-9*/}
        <div className="col-md-3" />{/*end-of-col-md-3*/}
        <div className="col-md-9 Reviews">
          <ReviewsDisplay state={reviews} business={data}/>
        </div> {/*end-of-col-md-3*/}
      </div>
      <Footer/>
    </div>
  );
};


export default BusinessProfile;
