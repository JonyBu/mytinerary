import React, { Component } from 'react'
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Profile from './img/profilepic.jpg'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const info = this.state
    console.log(info);
    axios
      .post('http://localhost:5000/users/', info)
      .then(res => {
        console.log(res);
        this.setState({ status: res.data.statusText })
      }
      )
  }

  render() {

    if (this.state.status !== '') {
      return (<Redirect to="/login"></Redirect>)
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <h1>Create Account</h1>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Image src={Profile} width="150px" roundedCircle alt="Add Photo" />
              </Col>
            </Row>
            <br />
            <Form className="formulario" onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-center">
                <Form.Label column sm={2}>
                  Username
              </Form.Label>
                <Col sm={4}>
                  <Form.Control type="username" name="username" value={this.state.username} onChange={this.handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-center">
                <Form.Label column sm={2}>
                  Password
              </Form.Label>
                <Col sm={4}>
                  <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-center">
                <Form.Label column sm={2}>
                  Email
              </Form.Label>
                <Col sm={4}>
                  <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalFirstName" className="justify-content-center">
                <Form.Label column sm={2}>
                  First Name
              </Form.Label>
                <Col sm={4}>
                  <Form.Control type="first-name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalLastName" className="justify-content-center">
                <Form.Label column sm={2}>
                  Last Name
              </Form.Label>
                <Col sm={4}>
                  <Form.Control type="last-name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCountry" className="justify-content-center">
                <Form.Label column sm={2}>Country</Form.Label>
                <Col sm={4}>
                  <Form.Control as="select" name="country" value={this.state.country} onChange={this.handleChange}>
                    <option>Choose...</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Uruguay</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck" className="justify-content-center">
                <Col sm={4}>
                  <Form.Check label="I agree to MYtinerary's Terms & Conditions" required />
                </Col>
              </Form.Group>
              <Button type="submit">OK</Button>
            </Form>
            <Footer />
          </Container>
        </div>
      )
    }
  }
}

export default Register