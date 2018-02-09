import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

import logoyebo from '../../Assets/media/images/logoYebo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          <b>AOD New York</b> <br/>
          2250 Lexington Avenue <br/>
          New York, NY 10035  - info@domain.com
        </p>
        <div className="socialMedia">
          <Link to="/" className="fa fa-twitter"></Link>
          <Link to="/" className="fa fa-facebook"></Link>
          <Link to="/" className="fa fa-pinterest"></Link>
        </div>
        <p>Handcrafted by <img src={logoyebo} alt="logo yebo"/></p>
      </footer>
    );
  }
}

export default Footer;
