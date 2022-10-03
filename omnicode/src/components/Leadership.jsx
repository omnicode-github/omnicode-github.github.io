import React from 'react';
import '../styles/Leadership.css';
import Card from './Card'

class Leadership extends React.Component {
  render() {
    return (
      <div className="leadership">
        <Card name="Eric Sohel" description="placeholder"/>
        <Card name="Yusha Aziz" description="placeholder"/>  
        <Card name="Samin Sarker" description="placeholder"/>  
        <Card name="Nakib Abedin" description="placeholder"/>  
      </div>
    );
  }
}

export default Leadership;