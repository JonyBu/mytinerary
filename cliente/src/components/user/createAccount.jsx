import React from 'react';
import { Col, Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from '../footer';
import imagenUser from '../../imagenes/userLogin.png'

class createAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: [],
            password: [],
            email: [],
            profilePic: [],
            firstName: [],
            lastName: [],
            country: [],
            isFetching: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div >
                <br />
                <h3>Create Account</h3>
                <br />
                <Jumbotron>
                    <Form onSubmit={this.handleSubmit}>
                        <img src={imagenUser} alt="sin imagen usuario" className="userLogo" />
                        <br />
                        <FormText color="muted">
                            Add Photo
                        </FormText>
                        <br />
                        <FormGroup row>
                            <Label for="exampleFile" sm={3}>File</Label>
                            <Col sm={9}>
                                <Input type="file" name="file" id="exampleFile" value={this.state.file} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="userName" sm={3}>User Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={3}>Password:</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={3}>Email:</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="firstName" sm={3}>First Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={3}>Last Name:</Label>
                            <Col sm={9}>
                                <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="select" sm={3}>Country:</Label>
                            <Col sm={5}>
                                <Input type="select" name="select" id="select" value={this.state.select} onChange={this.handleInputChange}>
                                    <option value=""></option>
                                    <option value="london">London</option>
                                    <option value="spain">Spain</option>
                                    <option value="french">French</option>
                                    <option value="italy">Italy</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col >
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="checkbox2" value={this.state.checkbox} onChange={this.handleInputChange} />{' '}
                                        I agree to MyItinerary <a href="/termsAndConditions">Terms & Conditions</a>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <br />
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