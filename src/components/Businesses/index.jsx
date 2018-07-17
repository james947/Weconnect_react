import React from 'react';
import FetchBusinesses from '../../containers/FetchBusinesses';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SearchBusiness from '../../containers/SearchBusiness';

const Businesses = () => (
  <div>
    <NavBar />
    <div className="container">
        <div className="row">
        <div className="col-md-2 businessDisplay">
          <SearchBusiness/>
         </div>
       <div className="col-md-10">  
          <FetchBusinesses />
        </div>
    
        </div>
    </div>
    <Footer />
  </div>
);

export default Businesses;
