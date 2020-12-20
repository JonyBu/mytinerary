import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import outLogin from "../redux/actions/logoutAction";

import logo from "../imagenes/logo/MYtineraryLogoSolo.png";
import imgLogo from "../imagenes/logo/MYtineraryLogoSolo.png";

const Menu = (props) => {
  console.log(props)
  const [collapsed, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!collapsed);

  if (props.loginReducer.isConected ||
    !sessionStorage.getItem("token")) {
    return (
      <Navbar color="gray" light className="m-3">
        <Link to="/profile" style={{ textDecoration: "none" }}>
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
                <Button color="danger" block className="mt-1">
                  Profile
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/favorite" style={{ textDecoration: "none" }}>
                <Button color="info" block className="mt-1">
                  Favorites
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" style={{ textDecoration: "none" }} onClick={toggle}>
                <Button
                  color="dark"
                  block
                  className="mt-1"
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
              <Link to="/createAccount" style={{ textDecoration: "none" }}>
                <Button color="info" block className="mt-1">
                  Sing in
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button color="dark" block className="mt-1">
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
