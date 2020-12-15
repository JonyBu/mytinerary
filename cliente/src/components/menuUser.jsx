import React, { useState } from "react";
import { connect } from "react-redux";
import outLogin from "../redux/actions/logoutAction";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  // NavbarBrand,
  // NavbarText,
} from "reactstrap";
import imgLogo from "../imagenes/logo/MYtineraryLogoSolo.png";

const MenuUser = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggle = () => setIsOpen(!isOpen);

  // const imagen = () => require(`../imagenes/usuarios/${user.profilePic}`).default;

  return (
    <Navbar color="gray" light>
      {/* <NavbarBrand href="/login" className="mr-auto">
        <NavbarText className="mr-2">Welcome</NavbarText>
        {props.currentUser.userName} 
      </NavbarBrand> */}
      <img src={imgLogo} alt="Mytinereary Logo" className="img-user-menu"/>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/profile">
              <Button color="dark" block outline size="sm">
                My Profile
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorite">
              <Button color="dark" block outline size="sm">
                My Favorites
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Button
                color="dark"
                block
                outline
                size="sm"
                onClick={() => props.outLogin(props.currentUser)}
              >
                Log out
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  outLogin: (data) => dispatch(outLogin(data)),
});

export default connect(null, mapDispatchToProps)(MenuUser);
