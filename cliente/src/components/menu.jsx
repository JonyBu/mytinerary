import React, {useState} from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import logo from "../imagenes/logo/MYtineraryLogoSolo.png"

const Menu = () => {

  const [collapsed, setIsOpen] = useState(true);

  const toggleNavbar = () => setIsOpen(!collapsed);

    return (
      <Navbar color="faded" light>
        <NavbarBrand href="/login" className="">
        <FontAwesomeIcon icon={faUserCircle} size="2x" color="#394E56" />
        </NavbarBrand>
        <img src={logo} alt="Logo Mytinerary" className="img-user-menu"/>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/createAccount">
                <Button color="dark" block outline>
                  Sing in
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                <Button color="dark" block outline>
                  Log in
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }



export default Menu;
