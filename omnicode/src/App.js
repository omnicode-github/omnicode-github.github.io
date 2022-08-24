import React from "react";
import Navbar from './components/Navbar'
import About from './components/About'
import Leadership from "./components/Leadership";
import Programs from './components/Programs'
import Resource from './components/Resource'
import Footer from './components/Footer'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <About/>
        <Programs/>
        <Resource/>
        <Leadership/>
        <Footer/>
      </div>
    );
  }
}

export default App;
