import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => (

  <footer className="text-center">
    <p>Developed by James Muriuki</p>
    <small>&copy; <Link className="footerCss" to="/terms">Copyright 2018 Terms and Conditions Apply</Link></small>
  </footer>

);

export default Footer;
