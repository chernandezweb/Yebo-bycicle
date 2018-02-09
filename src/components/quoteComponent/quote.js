import React, { Component } from 'react';



// relative path to image

class Quote extends Component {
  render() {
    // const logo = require('./Assets/media/images/logo.png');
    return (
      <section className="quote" id="quote">
        <a href="#" className="fa fa-twitter"></a>
        <h1 className="text-center">AOD NEW YORK @AOD  /  35 min</h1>
        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </section>
    );
  }
}

export default Quote;
