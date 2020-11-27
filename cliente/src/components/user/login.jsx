import React from "react";
import Footer from "../footer";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import startLogin from "../../redux/actions/loginAction";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: [],
      isConected: [],
    };
  }

  esperar = () => {
    var contador = 1;
    this.cronometro = setInterval(() => {
      if (!localStorage.token) {
        console.log("espera " + contador + "/5");
        if (contador === 5) {
          clearInterval(this.cronometro);
          console.log("Error en la autenticación");
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
    e.preventDefault();
    this.props.startLogin(this.state);
    this.esperar();
  };

  signGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/google";
  };

  render() {
    return (
      <div className="footer">
        <br />
        <h4>Login</h4>
        <br />
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

        <div>
          <GoogleButton className="centrar" onClick={this.signGoogle} />
        </div>
        <br />
        <FormText color="muted">
          Don´t have a MYtinerary account yet? You should create one It´s
          totally rfee and only takes a minute
        </FormText>

        <Link to="./createAccount">Create Account</Link>

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (data) => dispatch(startLogin(data)),
});

export default connect(null, mapDispatchToProps)(Login);
