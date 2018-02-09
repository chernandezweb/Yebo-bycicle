import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

// relative path to image
import section4Img1 from '../../Assets/media/images/section4-image1.jpg';
import section4Img2 from '../../Assets/media/images/section4-image2.jpg';
import section4Img3 from '../../Assets/media/images/section4-image3.jpg';
import section4Img4 from '../../Assets/media/images/section4-image4.jpg';
import section4Img5 from '../../Assets/media/images/section4-image5.jpg';
import section4Img6 from '../../Assets/media/images/section4-image6.jpg';
import section4Img7 from '../../Assets/media/images/section4-image7.jpg';
import section4Img8 from '../../Assets/media/images/section4-image8.jpg';
import iconShopnow from '../../Assets/media/images/icon-shopnow.png';


class ShopPreview extends Component {
  render() {
    // const logo = require('./Assets/media/images/logo.png');
    return (
      <section className="shopPreview" id="shopPreview">


          <div className="sImage1">
            <img src={section4Img1} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>

          <div className="sImage2">
            <img src={section4Img2} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>

          <div className="sImage3">
            <img src={section4Img3} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>



          <div className="sImage4">
            <img src={section4Img4} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>
          <div className="sImage5">
            <img src={section4Img5} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>

          <div className="sImage6">
            <img src={section4Img6} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>
          <div className="sImage7">
            <img src={section4Img7} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>
          <div className="sImage8">
            <img src={section4Img8} alt="Bicyle" />
            <div className="overlay">
              <Link to="/"><img src={iconShopnow} alt="Bicyle" className="section4"/></Link>
            </div>
          </div>

          <div className="discoverShop">
              <Link to="/">DISCOVER THE SHOP</Link>
          </div>
        </section>
    );
  }
}

export default ShopPreview;
