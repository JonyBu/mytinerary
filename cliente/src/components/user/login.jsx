import React from 'react';
import Footer from '../footer';
import axios from 'axios';
import { FormText, Jumbotron, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import  GoogleButton from 'react-google-button' 

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSave = (e) => {
        e.preventDefault();
        const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/login';
        const userObject = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post(QUOTE_SERVICE_URL, userObject)
            .then(response => {
                console.log('respueta a login: ', response);
            })
            .catch(err => {
                console.log(err)
            })
    }

    signGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/google"
    }

    render() {
        return (
            <div className="footer" >
                <br />
                <h4>Login</h4>
                <br />
                <Jumbotron>
                    <Form >
                        <FormGroup row >
                            <Label for="user" sm={3}>User Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="userName" id="user" onChange={this.onChange.bind(this)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={3}>Password:</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="password" onChange={this.onChange.bind(this)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="checkboxRemember" />{' '}
                                        Remember me
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup check row>
                            <Button onClick={this.onSave} color="primary">Submit</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>

                <div >
                    <GoogleButton className="centrar" onClick={this.signGoogle} />
                </div>
                <br />
                <FormText color="muted">
                    Don´t have a MYtinerary account yet?
                    You should create one It´s totally rfee
                    and only takes a minute
                </FormText>

                <Link to="./createAccount">Create Account</Link>

                <Footer />
            </div>
        )
    }
}

export default Login;