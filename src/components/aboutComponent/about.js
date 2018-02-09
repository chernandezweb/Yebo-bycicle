import React, { Component } from 'react';

// relative path to image
import icon1 from '../../Assets/media/images/icon1.png';

class About extends Component {
  render() {
    // const logo = require('./Assets/media/images/logo.png');
    return (
      <section className="about" id="about">
        <img src={icon1} alt="icon1"/>
        <h1 className="text-center">A NEW GENERATION OF VINTAGE BIKE</h1>
        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </section>
    );
  }
}

export default About;
