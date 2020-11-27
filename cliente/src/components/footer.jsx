import React from "react";
import image from "../imagenes/homeIcon.png";
import { Link } from "react-router-dom";
import MenuUSer from "./menuUser"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img className="home" src={image} alt="imagen de home" />
          <MenuUSer/>
        </Link>
      </div>
    );
  }
}

export default Footer;
