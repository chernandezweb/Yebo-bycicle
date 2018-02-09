import React, { Component } from 'react';



// relative path to image
import bigImage1 from '../../Assets/media/images/section1-image1.jpg';
import bigImage2 from '../../Assets/media/images/section2-image1.jpg';
import smallImage1 from '../../Assets/media/images/section1-image2.jpg';
import smallImage2 from '../../Assets/media/images/section2-image2.jpg';
import smallImage3 from '../../Assets/media/images/section3-image2.jpg';
import mediumImage1 from '../../Assets/media/images/section3-image1.jpg';
import mediumImage2 from '../../Assets/media/images/section3-image3.jpg';
import icon2 from '../../Assets/media/images/icon2.png';
import icon3 from '../../Assets/media/images/icon3.png';
import icon4 from '../../Assets/media/images/icon4.png';

class Work extends Component {
  render() {
    // const logo = require('./Assets/media/images/logo.png');
    return (
      <section className="work" id="work">

          <img src={bigImage1} alt="Bicyle 1" className="section1"/>

          <div className="oliva section1">
            <img src={icon2} alt="icon2" className="iconWork"/>
            <h1 className="text-center">VINTAGE OLIVA</h1>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived. </p>
            <img src={smallImage1} alt="Small bicycle image" className="smallWork"/>
          </div>


          <div className="boriosa section2">
            <img src={icon3} alt="icon3" className="iconWork"/>
            <h1 className="text-center">LA BORIOSA</h1>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived. </p>
            <img src={smallImage2} alt="Small bicycle image" className="smallWork"/>
          </div>

          <img src={bigImage2} alt="Bicyle 2" className="section2"/>



          <img src={mediumImage1} alt="Bicyle 3" className="section3 bottomImage3"/>

          <div className="hulot section3">
            <img src={icon4} alt="icon4" className="iconWork"/>
            <h1 className="text-center">RETRO BIKE - M. HULOT</h1>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived. </p>
            <img src={smallImage3} alt="Small bicycle image" className="smallWork"/>
          </div>

          <img src={mediumImage2} alt="Bicyle 4" className="section3 bottomImage4"/>

        <div className="section2">
        </div>

        <div className="section3">
        </div>
      </section>
    );
  }
}

export default Work;
