import React from 'react';
import { Link } from 'react-router-dom';
import FetchBusinesses from '../../containers/FetchBusinesses';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Businesses = () => (
  <div>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                filter by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="#">Category</Link>
              <Link className="dropdown-item" to="#">Location</Link>
            </div>
          </div>
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
