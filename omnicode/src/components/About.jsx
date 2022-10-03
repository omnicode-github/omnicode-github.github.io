import React from 'react';
import '../styles/About.css';

class About extends React.Component {
  
  render() {
    return (
      <div className="about">
        <img src="https://bit.ly/2rlzaXi" alt="Five developers at work."/>
        <div className="about_container">
          <div className="about_content">
            <h2 className="info">
              Code. Program. Design.
            </h2>
            <h1>By students -- for students</h1>
            <h2>Learn about the industry changing today's world</h2>
            <button>Join</button>
          </div>
          <div className="about_img_container">
            {/* <div className="about_card"><img src="#" alt="pic"/></div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;


