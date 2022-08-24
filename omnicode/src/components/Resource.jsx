import React from 'react';
import '../styles/Resource.css';

class Resource extends React.Component {
  render() {
    return (
      <div className="resource">
        <div className="resource_container">
          <div className="resource_img_container">
            <div className="resource_card"><img src="#" alt="pic"/></div>
          </div>
          <div className="resource_content">
            <h1>By students -- for students</h1>
            <h2>
              StuyVesments wants to teach students resource avoiding liabilities, investing in assets, and starting businesses.StuyVesments wants to teach students resource avoiding liabilities, investing in assets, and starting businesses.
            </h2>
            <button>Join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;