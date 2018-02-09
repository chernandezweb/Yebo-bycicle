import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import About from './components/aboutComponent/about';
import Work from './components/workComponent/work';
import Quote from './components/quoteComponent/quote';
import ShopPreview from './components/shoppreviewComponent/shoppreview';
import Contact from './components/contactComponent/contact';
import Footer from './components/footerComponent/footer';

//includes
import './Assets/css/style.min.css';


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Header />
          <About />
          <Work />
          <Quote />
          <ShopPreview />
          <Contact />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
