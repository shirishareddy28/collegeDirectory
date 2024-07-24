import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Optional: Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">College Directory</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Student Dashboard</Link></li>
            <li><Link to="/faculty">Faculty Dashboard</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
