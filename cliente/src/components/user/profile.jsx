import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Jumbotron, CardImg, Col, Row, Table } from "reactstrap";

import getUser from "../../redux/actions/user/getUserAction";
import outLogin from "../../redux/actions/user/logoutAction";

import Footer from "../footer";
import ModalUser from "../user/modalProfile";
// import Menu from "../menu";

import img from "../../imagenes/usuarios/user.png";
import imgfondo from "../../imagenes/fondo/sello.jpg";
import imgLogo from "../../imagenes/logo/MYtineraryLogoSolo.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTineraries: [],
      currentUser: [],
      isConected: [],
      imagen: img,
    };
  }

  async componentDidMount() {
    await this.props.getUser();
    if (this.props.loginReducer.isConected) {
      const imagenProfile =
        require(`../../imagenes/usuarios/${this.props.loginReducer.currentUser.profilePic}`).default;
      this.setState({
        ...this.state,
        imagen: imagenProfile,
        currentUser: this.props.loginReducer.currentUser,
        isConected: this.props.loginReducer.isConected,
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.loginReducer.isConected) {
      if (nextProps.loginReducer.isUpdated) {
        this.props.getUser();
        this.setState({
          ...this.state,
          currentUser: this.props.loginReducer.currentUser,
        });
      }
    } else {
      this.props.history.push("/login");
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.outLogin(this.state);
  };

  getMyIt = (e) => {
    e.preventDefault();
    this.props.itinerariesAction(
      this.props.loginReducer.currentUser.myTineraries
    );
  };

  render() {
    return (
      <>
        <img
          src={imgLogo}
          alt="imagen logo mytinerary"
          className="img-user-menu m-3"
        />
        {/* <Menu /> */}
        <Jumbotron fluid style={{ backgroundImage: `url(${imgfondo})` }}>
          <Card className="border-dark m-3">
            <Row className="rowProfile ">
              <Col xs="12" sm="6" className="pr-0">
                <CardImg
                  src={this.state.imagen}
                  alt="imagen de usuario"
                  className="imagenProfile "
                />
                <ModalUser
                  id={this.state.currentUser._id}
                  datos={{
                    type: "file",
                    name: "profilePic",
                    placeholder: "profile pic",
                  }}
                />
              </Col>
              <Col className="m-auto p-0 colRelative" xs="12" sm="6">
                <h4 className="m-3 text-orange">WELCOME</h4>
                <Table>
                    <tr>
                      <td className="border-top-0 text-orange">User:</td>
                      <td className="border-top-0">{this.state.currentUser.userName}</td>
                      <td className="border-top-0">
                        <ModalUser
                          id={this.state.currentUser._id}
                          datos={{
                            type: "text",
                            name: "userName",
                            placeholder: "User Name",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-orange">Email:</td>
                      <td>{this.state.currentUser.email}</td>
                      <td>
                        <ModalUser
                          id={this.state.currentUser._id}
                          datos={{
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="text-orange">Country: </td>
                      <td>{this.state.currentUser.country}</td>
                      <td>
                        <ModalUser
                          id={this.state.currentUser._id}
                          datos={{
                            type: "text",
                            name: "country",
                            placeholder: "Country",
                          }}
                        />
                      </td>
                    </tr>
                </Table>
                
              </Col>
            </Row>
          </Card>
          {/* <Card>
           {console.log(this.state.currentUser.myTineraries)}
            {this.state.myTineraries.map((myIt, i) => (
              <div key={i}>{myIt}</div>
            ))}
          </Card> */}
        </Jumbotron>

        <Row>
          <Col xs="12" sm="4">
            <Link
              onClick={this.handleClick.bind(this)}
              to="/"
              style={{ textDecoration: "none" }}
            >
              Logout
            </Link>
          </Col>
          <Col xs="12" sm="4">
            <Link to="/favorite" style={{ textDecoration: "none" }}>
              Favorites
            </Link>
          </Col>
          <Col xs="12" sm="4">
            <Link to="/cities" style={{ textDecoration: "none" }}>
              {" "}
              Cities{" "}
            </Link>
          </Col>
        </Row>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    outLogin: (data) => dispatch(outLogin(data)),
    getUser: (data) => dispatch(getUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
