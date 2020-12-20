import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleButton from "react-google-button";

import {
  FormText,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Alert,
} from "reactstrap";

import startLogin from "../../redux/actions/loginAction";

import Footer from "../footer";

import img from "../../imagenes/logo/MYtineraryLogo.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "invisible",
    };
  }

  // esperar = () => {
  //   var contador = 1;
  //   this.cronometro = setInterval(() => {
  //     if (!sessionStorage.token) {
  //       console.log("espera " + contador + "/2");
  //       if (contador === 2) {
  //         clearInterval(this.cronometro);
  //         this.setState({ error: "visible" });
  //       } else {
  //         contador++;
  //       }
  //     } else {
  //       this.props.history.push("/profile");
  //       clearInterval(this.cronometro);
  //     }
  //   }, 1000);
  //   // clearInterval(this.cronometro);
  // };

  onChange = (e) => {
    var state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSave = (e) => {
    e.preventDefault();
    this.props.startLogin(this.state);
    this.props.history.push("/profile");
    // this.esperar();
  };

  signGoogle = () => {
    window.location.href = `http://localhost:${
      process.env.PORT || "8080"
    }/api/auth/google`;
  };

  render() {
    return (
      <>
        <Alert color="danger" className={this.state.error}>
          Authentication failed, please try again or register
        </Alert>

        <img src={img} className="imagenLogin m-4" alt="Logo Mytinerary"></img>
        {/* <h4 className="m-3">Login</h4> */}
        <Jumbotron>
          <Form>
            <FormGroup row>
              <Label for="user" sm={3}>
                User Name:
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="userName"
                  id="user"
                  onChange={this.onChange.bind(this)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={3}>
                Password:
              </Label>
              <Col sm={9}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onChange.bind(this)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkboxRemember" /> Remember me
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <br />
            <FormGroup check row>
              <Button onClick={this.onSave.bind(this)} color="primary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Jumbotron>

        <GoogleButton
          className="centrar"
          style={{ height: "" }}
          onClick={this.signGoogle}
        />

        <FormText color="muted" className="m-3">
          Don´t have a MYtinerary account yet? You should create one It´s
          totally rfee and only takes a minute
        </FormText>

        <Link to="./createAccount">Create Account</Link>

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

const mapDispatchToProps = (dispatch) => ({
  startLogin: (data) => dispatch(startLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
