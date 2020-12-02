import React from "react";
import {
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  ButtonGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import imagenUser from "../imagenes/user.png";
import imagenMenu from "../imagenes/menu.png";
import outLogin from "../redux/actions/logoutAction";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: [],
      isConected: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser.currentUser,
      isConected: this.props.currentUser.isConected,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.outLogin(this.state);
  };

  render() {
    return (
      <div className="li">
        <Navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <img className="logoUser" src={imagenUser} alt="" />
            </DropdownToggle>
            <DropdownMenu left className="m-0 p-0 border-0">
              <ButtonGroup vertical id="boton-user">
                <Link to="/createAccount" className="text-decoration-none">
                  <Button color="warning" block outline>
                    Create Account
                  </Button>
                </Link>
                <Link to="/login" className="text-decoration-none">
                  <Button color="warning" block outline>
                    login
                  </Button>
                </Link>
                <Link to="/" className="text-decoration-none">
                  <Button
                    color="warning"
                    block
                    outline
                    onClick={this.handleClick.bind(this)}
                  >
                    logout
                  </Button>
                </Link>
              </ButtonGroup>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <img className="logoMenu" src={imagenMenu} alt="" />
            </DropdownToggle>
            <DropdownMenu right className="m-0 p-0 border-0">
              <ButtonGroup vertical id="boton-menu">
                <Link to="/cities" className="text-decoration-none">
                  <Button color="info" block outline>
                    Chose your itinerary
                  </Button>
                </Link>
                <Link to="/profile" className="text-decoration-none">
                  <Button color="info" block outline>
                    Profile
                  </Button>
                </Link>
              </ButtonGroup>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  outLogin: (data) => dispatch(outLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
