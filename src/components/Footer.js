import React from 'react';
import '../styles/Footer.css'; // Optional: Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} College Directory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
