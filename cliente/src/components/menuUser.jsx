import React, { useState } from "react";
import { connect } from "react-redux";
import outLogin from "../redux/actions/logoutAction";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const MenuUser = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light>
      <NavbarBrand href="/login" className="mr-auto">
        <NavbarText className="mr-3">Welcome</NavbarText>
        <>{props.currentUser.userName}</>
        <img
          id=""
          src={props.currentUser.profilePic}
          alt={props.currentUser.profilePic}
          className="ml-3"
        />
      </NavbarBrand>

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
