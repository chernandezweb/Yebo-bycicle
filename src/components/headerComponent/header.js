import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';


// relative path to image
import logo from '../../Assets/media/images/logo.png';
import headerImg from '../../Assets/media/images/header.jpg';

class Header extends Component {
  constructor(props) {
   super(props);
   this.toggleMenu = this.toggleMenu.bind(this);
   this.state = {
     menuActive: false
   };
 }
 toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }


  render() {
    let menu;
    if(this.state.menuActive) {
     menu =  <nav className="menuMobile">
              <ul className="narrowLinks">
                <li className="first">
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#shopPreview">Shop</a>
                </li>
                <li className="last">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          }else {
            menu = "";
          }

    return (
      <header>
        <img src={headerImg} alt="Image Header" width="100%"/>
          {menu}
          <nav className="menuDesktop">
            <ul>
              <li className="first">
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li className="logoDesktop">
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
              </li>
              <li>
                <a href="#shopPreview">Shop</a>
              </li>
              <li className="last">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        <img src={logo} alt="logo" className="logoMobile"/>
        <i className="fa fa-bars fa-2x navBars" onClick={this.toggleMenu}/>
      </header>
    );
  }
}

export default Header;
