import React from 'react';
import Footer from '../footer';
import axios from 'axios';
import { Jumbotron, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

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
        console.log(state)
        this.setState(state);
    }

    onSave = () => {
        axios.post()
    }

    signGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/google"
    }

    render() {

        return (
            <div className="footer" >
                <br/>
                <br/>
                <Jumbotron>
                <Form >
                    <FormGroup row >
                        <Label for="user" sm={2}>User</Label>
                        <Col sm={10}>
                            <Input type="text" name="userName" id="user"  />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="password" />
                        </Col>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                </Jumbotron>
                <div>
                    <button onClick={this.signGoogle}>
                        Google
                    </button>
                </div>
                <Footer />
            </div>

        )

    }
}

export default Login;