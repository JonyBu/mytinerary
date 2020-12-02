import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../imagenes/MYtineraryLogo.png";
import imageFlecha from "../imagenes/circled-right-2.png";
import "../App.css";
import ImageCarousel from "../components/carousel";
import Menu from "../components/menu";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="mt-3">
          <img
            id="logo"
            src={imageLogo}
            alt="logo mytinerary"
            className="mt-3"
          />
          <p className="m-3">
            Find your perfect trip, designed by insiders who know and love teir
            cities.
          </p>
          <h2 className="m-3">Start browsing</h2>
          <Link to="./cities">
            <img id="flecha" src={imageFlecha} alt="cities" />
          </Link>
          <h2 className="m-3">Popular MYtineraries</h2>
          <ImageCarousel />
        </div>
        <div class="text-dark-50 m-3">
          <div class="container text-center">
            <small>© 2020 Copyright | All Rights Reserved</small>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
