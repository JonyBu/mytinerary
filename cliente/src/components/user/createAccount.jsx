import React from 'react';
import { Col, Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from '../footer';

class createAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: [],
            password: [],
            isFetching: false
        }
    }
    render() {
        return (
            <div >
                <br />
                <h3>Create Account</h3>
                <br />
                <Jumbotron>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleFile" sm={3}>File</Label>
                            <Col sm={9}>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Add Photo
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="userName" sm={3}>User Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="userName" id="userName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={3}>Password:</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={3}>Email:</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" id="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="firstName" sm={3}>First Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="firstName" id="firstName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={3}>Last Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="lastName" id="lastName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="select" sm={3}>Country:</Label>
                            <Col sm={5}>
                                <Input type="select" name="select" id="select" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col >
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="checkbox2" />{' '}
                                        I agree to MyItinerary <a href="/termsAndConditions">Terms & Conditions</a>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup check row>
                            <Button color="primary">Submit</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
                <Footer />
            </div>
        )
    }
}

export default createAccount;