import React from 'react';
import FetchBusinesses from '../../containers/FetchBusinesses';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SearchBusiness from '../../containers/SearchBusiness';

const Businesses = () => (
  <div>
    <NavBar />
    <div className="container">
        <div className="col-md-10">
        <SearchBusiness/>
          <FetchBusinesses />
        </div>
    </div>
    <Footer />
  </div>
);

export default Businesses;
