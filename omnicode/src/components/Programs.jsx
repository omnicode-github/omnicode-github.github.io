import React from 'react';
import '../styles/Programs.css';
import Card from './Card'

class Leadership extends React.Component {
  render() {
    return (
      <div className="contain">
        <div className="text">
          <h1>Programs</h1>
          <p>We offer a multitute of programs throughout the year.</p>
        </div>
        <div className="programs">
          <Card name="Fall" description="placeholder"/>
          <Card name="Spring" description="placeholder"/>  
          <Card name="Summer" description="placeholder"/>  
        </div>
      </div>
    );
  }
}

export default Leadership;