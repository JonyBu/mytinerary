import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardLink,
  Jumbotron,
  CardImg,
  Col,
  Row,
} from "reactstrap";

import outLogin from "../../redux/actions/logoutAction";
import getUser from "../../redux/actions/getUserAction";
import Footer from "../footer";
import ModalUser from "../user/modalProfile";

import img from "../../imagenes/user.png";
import imgfondo from "../../imagenes/fondo/sello.jpg";
import imgLogo from "../../imagenes/logo/MYtineraryLogoSolo.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      isConected: [],
      imagen: img,
    };
  }

  async componentDidMount() {
    await this.props.getUser();
    this.setState({
      currentUser: this.props.loginReducer.currentUser,
      isConected: this.props.loginReducer.isConected,
    });
    const imagenProfile = require(`../../imagenes/usuarios/${this.state.currentUser.profilePic}`)
      .default;
    this.setState({
      ...this.state,
      imagen: imagenProfile,
    });
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.loginReducer.isUpdated === true) {
      await this.props.getUser();
      this.setState({
        ...this.state,
        currentUser: this.props.loginReducer.currentUser,
      });
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.outLogin(this.state);
  };

  render() {
    return (
      <>
        <img
          src={imgLogo}
          alt="imagen logo mytinerary"
          className="img-user-menu m-3"
        />
        <Jumbotron fluid style={{ backgroundImage: `url(${imgfondo})` }}>
          <Card className="border-dark m-3">
            <Row className="rowProfile ">
              <Col xs="12" sm="6" className="pr-0 ">
                <CardImg
                  left
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
                <h4 className="m-3">WELCOME</h4>
                <p>
                  User: {this.state.currentUser.userName}{" "}
                  <ModalUser
                    id={this.state.currentUser._id}
                    datos={{
                      type: "text",
                      name: "userName",
                      placeholder: "User Name",
                    }}
                  />
                </p>
                <p>
                  Email: {this.state.currentUser.email}{" "}
                  <ModalUser
                    id={this.state.currentUser._id}
                    datos={{
                      type: "email",
                      name: "email",
                      placeholder: "Email",
                    }}
                  />
                </p>
                <p>
                  Country: {this.state.currentUser.country}{" "}
                  <ModalUser
                    id={this.state.currentUser._id}
                    datos={{
                      type: "text",
                      name: "country",
                      placeholder: "Country",
                    }}
                  />
                </p>
              </Col>
            </Row>
          </Card>
        </Jumbotron>

        <CardLink onClick={this.handleClick.bind(this)} href="/">
          Logout
        </CardLink>
        <CardLink href="/favorite">Itineraries favorite</CardLink>
        <CardLink href="/cities"> Cities </CardLink>
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
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
