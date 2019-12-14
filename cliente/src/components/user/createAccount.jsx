import React from 'react';
import { Col, Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from '../footer';
import imagenUser from '../../imagenes/userLogin.png';
import axios from 'axios';

class createAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            email: '',
            profilePic: '',
            firstName: '',
            lastName: '',
            country: '',
            checkbox: false
        }
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/createAccount';
        const userObject = {
            profilePic: this.state.profilePic,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country,
            checkbox: this.state.checkbox
        }
        axios.post(QUOTE_SERVICE_URL, userObject)
            .then(response => console.log('succes: ' + response))
            .catch(error => console.log('error: ' + error))
    }

    render() {
        return (
            <div className=" wrapper ">
                <br />
                <h3>Create Account</h3>
                <br />
                <Jumbotron>
                    <Form  >
                        <img src={imagenUser} alt="sin imagen usuario" className="userLogo" />
                        <br />
                        <FormText color="muted">
                            Add Photo
                                </FormText>
                        <br />
                        <FormGroup row>
                            <Label for="profilePic" sm={3}>File</Label>
                            <Col sm={9}>
                                <Input type="file" name="profilePic" id="profilePic" value={this.state.profilePic} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="userName" sm={3}>User Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="userName" id="userName" autoComplete="userName" value={this.state.userName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={3}>Password:</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="password" autoComplete="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={3}>Email:</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="firstName" sm={3}>First Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={3}>Last Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="country" sm={3}>Country:</Label>
                            <Col sm={5}>
                                <Input type="select" name="country" id="country" value={this.state.select} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="london">London</option>
                                    <option value="spain">Spain</option>
                                    <option value="french">French</option>
                                    <option value="italy">Italy</option>
                                    <option value="other">Other</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col >
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="checkbox" id="checkbox" value={this.state.checkbox} onChange={this.handleInputChange} required />{' '}
                                        I agree to MyItinerary <a href="/termsAndConditions">Terms & Conditions</a>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup check row>
                            <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
                <Footer />
            </div>
        )
    }
}


export default createAccount;