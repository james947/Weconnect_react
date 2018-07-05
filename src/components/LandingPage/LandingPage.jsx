import React from 'react';
import Footer from '../Footer/Footer';
import './LandingPage.css';
import LandingBody from '../LandingBody/LandingBody';
import LandingNav from '../LandingNav';

const LandingPage = () => (
  <div className="landing">
    <LandingNav />
    <LandingBody />
    <Footer />
  </div>
);

export default LandingPage;
