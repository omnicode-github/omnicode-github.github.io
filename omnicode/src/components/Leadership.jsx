import React from 'react';
import '../styles/Leadership.css';
import Card from './Card'

class Leadership extends React.Component {
  render() {
    return (
      <div className="leadership">
        <Card name="name" description="placeholder"/>
        <Card name="name" description="placeholder"/>  
        <Card name="name" description="placeholder"/>  
        <Card name="name" description="placeholder"/>  
      </div>
    );
  }
}

export default Leadership;