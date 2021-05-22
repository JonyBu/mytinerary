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

import startLogin from "../../redux/actions/user/loginAction";

import Footer from "../footer";

import img from "../../imagenes/logo/MYtineraryLogo.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "invisible",
    };
  }

  esperar = () => {
    var contador = 1;
    this.cronometro = setInterval(() => {
      if (!sessionStorage.token) {
        console.log("espera " + contador + "/2");
        if (contador === 2) {
          this.setState({ error: "visible" });
          document.getElementById("password").value = "";
          clearInterval(this.cronometro);
        } else {
          contador++;
        }
      } else {
        this.props.history.push("/profile");
        clearInterval(this.cronometro);
      }
    }, 1000);
    // clearInterval(this.cronometro);
  };

  onChange = (e) => {
    var state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSave = (e) => {
    this.props.startLogin(this.state);
    this.esperar();
  };

  signGoogle = () => {
    let QUOTE_SERVICE_URL = `http://localhost:8080/api/auth/google`;
    if (process.env.NODE_ENV === "production") {
      QUOTE_SERVICE_URL = `/api/auth/google`;
    }
    window.location.href = QUOTE_SERVICE_URL;
  };

  render() {
    return (
      <>
        <img src={img} className="imagenLogin m-4" alt="Logo Mytinerary"></img>
        <Alert color="danger" className={this.state.error}>
          Authentication failed, check the data entered and try again or
          register
        </Alert>

        <Jumbotron className="jumbotron">
          <Form>
            <FormGroup row>
              <Label for="user" sm={3}>
                User Name:
              </Label>
              <Col sm={9}>
                {this.state.error === "invisible" ? (
                  <Input
                    type="text"
                    name="userName"
                    id="user"
                    onChange={this.onChange.bind(this)}
                  />
                ) : (
                  <Input
                    type="text"
                    name="userName"
                    id="user"
                    onChange={this.onChange.bind(this)}
                    invalid
                  />
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={3}>
                Password:
              </Label>
              <Col sm={9}>
                {this.state.error === "invisible" ? (
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onChange.bind(this)}
                    onKeyDown={function (e) {
                      if (e.key === "Enter") {
                        document.getElementById("myBtn").click();
                      }
                    }}
                  />
                ) : (
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onChange.bind(this)}
                    invalid
                    onKeyDown={function (e) {
                      if (e.key === "Enter") {
                        document.getElementById("myBtn").click();
                      }
                    }}
                  />
                )}
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
              <Button
                onClick={this.onSave.bind(this)}
                color="primary"
                id="myBtn"
              >
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
