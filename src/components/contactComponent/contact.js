import React, { Component } from 'react';


// relative path to image
import logo from '../../Assets/media/images/logo.png';

class Contact extends Component {
  render() {
    // const logo = require('./Assets/media/images/logo.png');
    return (
      <section className="contact" id="contact">
        <img src={logo} alt="logo"/>
        <h1 className="text-center">Stay on the saddle!</h1>
        <form action="index.html" method="post" className="subscribe-form">
         <input type="email" name="email" className="subscribe-input" placeholder="enter your email..."/>
         <button type="submit" className="subscribe-submit">GO</button>
        </form>
      </section>
    );
  }
}

export default Contact;
