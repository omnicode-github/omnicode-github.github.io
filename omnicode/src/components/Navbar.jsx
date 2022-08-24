import React from 'react';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          Omnicode
        </div>
        <div className="links">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;