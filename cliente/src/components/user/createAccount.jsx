import React from "react";
import { connect } from "react-redux";

import {
  Col,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import Footer from "../footer";

import newUser from "../../redux/actions/user/newUserAction";

import imagenUser from "../../imagenes/usuarios/userLogin.png";

class createAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "user.png",
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      checkbox: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleInputImage = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const localImageUrl = URL.createObjectURL(files[0]);
    document.querySelector("img").src = localImageUrl;
    this.setState({ profilePic: files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newUser(this.state);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    nextProps.loginReducer.isCreated
      ? this.props.history.push("/login")
      : alert("error vuelva a intentarlo");
  }

  render() {
    return (
      <>
        <br />
        <h3>Create Account</h3>
        <br />
        <Jumbotron>
          <Form encType="multipart/form-data">
            <img
              src={imagenUser}
              alt="sin imagen usuario"
              className="userLogo"
            />
            <br />
            <FormText color="muted">Add Photo</FormText>
            <br />
            <FormGroup row>
              <Label for="profilePic" sm={3}>
                File
              </Label>
              <Col sm={9}>
                <Input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  onChange={this.handleInputImage}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="userName" sm={3}>
                User Name:
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  autoComplete="userName"
                  value={this.state.userName}
                  onChange={this.handleInputChange}
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
                  autoComplete="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={3}>
                Email:
              </Label>
              <Col sm={9}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="firstName" sm={3}>
                First Name:
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={3}>
                Last Name:
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="country" sm={3}>
                Country:
              </Label>
              <Col sm={5}>
                <Input
                  type="select"
                  name="country"
                  id="country"
                  value={this.state.select}
                  onChange={this.handleInputChange}
                >
                  <option value=""></option>
                  <option value="united kingdon">United Kingdon</option>
                  <option value="spain">Spain</option>
                  <option value="french">French</option>
                  <option value="italy">Italy</option>
                  <option value="other">Other</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      value={this.state.checkbox}
                      onChange={this.handleInputChange}
                      required
                    />{" "}
                    I agree to MyItinerary{" "}
                    <a href="/termsAndConditions">Terms & Conditions</a>
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <br />
            <FormGroup check row>
              <Button onClick={this.handleSubmit} color="primary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Jumbotron>
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
  newUser: (data) => dispatch(newUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(createAccount);
