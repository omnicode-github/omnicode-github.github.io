import React from 'react';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about_container">
          <div className="about_content">
            <h1>By students -- for students</h1>
            <h2>
              StuyVesments wants to teach students about avoiding liabilities, investing in assets, and starting businesses.StuyVesments wants to teach students about avoiding liabilities, investing in assets, and starting businesses.
            </h2>
            <button>Join</button>
          </div>
          <div className="about_img_container">
            <div className="about_card"><img src="#" alt="pic"/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;


