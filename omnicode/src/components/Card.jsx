import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="col">
          <div className="about-3_card"><img src="images/logo.png" alt="pic"/></div>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;

