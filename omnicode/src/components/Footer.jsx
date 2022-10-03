import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer_links">
          <div className="footer_link_wrapper">
            <div className="footer_link_items">
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Testimonials</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
            <div className="footer_link_items">
              <h2>Contact Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Testimonials</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
          </div>
          <div className="footer_link_wrapper">
            <div className="footer_link_items">
              <h2>Videos</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Testimonials</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
            <div className="footer_link_items">
              <h2>Social Media</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Testimonials</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;


