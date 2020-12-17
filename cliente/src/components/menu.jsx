import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import outLogin from "../redux/actions/logoutAction";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import imgLogo from "../imagenes/logo/MYtineraryLogoSolo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import logo from "../imagenes/logo/MYtineraryLogoSolo.png";


const Menu = (props) => {
  const [collapsed, setIsOpen] = useState(true);
  
  const toggle = () => setIsOpen(!collapsed);
  if (props.loginReducer.isConected) {
    
    // const imagenProfile = require(`../imagenes/usuarios/${props.loginReducer.currentUser.profilePic}`)
    //       .default;

    return (
      <Navbar color="gray" light className="m-3">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          {/* <img src={imagenProfile} alt="imagen de usuario" className="imgMenu" /> */}
          {props.loginReducer.currentUser.userName}
        </Link>
        <Link to="/" className="img-user-menu">
          <img src={imgLogo} alt="Mytinereary Logo" className="img-user-menu" />
        </Link>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Button color="dark" block outline size="sm">
                  My Profile
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/favorite" style={{ textDecoration: "none" }}>
                <Button color="dark" block outline size="sm">
                  My Favorites
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" style={{ textDecoration: "none" }} onClick={toggle}>
                <Button
                  color="dark"
                  block
                  outline
                  size="sm"
                  onClick={() => {
                    props.outLogin(props.loginReducer.currentUser);
                  }}
                >
                  Log out
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar color="faded" light>
        <NavbarBrand href="/login" className="">
          <FontAwesomeIcon icon={faUserCircle} size="2x" color="#394E56" />
        </NavbarBrand>
        <img src={logo} alt="Logo Mytinerary" className="img-user-menu" />
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link href="/createAccount" style={{ textDecoration: "none" }}>
                <Button color="dark" block outline>
                  Sing in
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Button color="dark" block outline>
                  Log in
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  outLogin: (data) => dispatch(outLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
