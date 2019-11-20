import React from 'react';
import imageLogo from '../imagenes/MYtineraryLogo.png';
import imageFlecha from '../imagenes/circled-right-2.png';
import '../App.css';
import ImageCarousel from '../components/carousel';
import Menu from '../components/menu';

class Home extends React.Component {
  render() {
    return (
      <div >
        <Menu/>
        <div className="margen">
          
          <img id="logo" src={imageLogo} alt="" />
          <p>Find your perfect trip, designed by insiders who know and love teir cities.</p>
          <h2>Start browsing</h2>
          <a href="./cities"><img id="flecha" src={imageFlecha} alt="cities" /></a>
          
          <h2>Popular MYtineraries</h2>
          
          <ImageCarousel />

        </div>
      </div>
    )
  }
}

export default Home;