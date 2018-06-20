import React from 'react';
import FetchBusinesses from '../../containers/FetchBusinesses';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Businesses = () => (
  <div>
    <NavBar />
    <FetchBusinesses />
    <Footer />
  </div>
);

export default Businesses;
