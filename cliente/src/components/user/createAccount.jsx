import React from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from '../footer';

class createAccount extends React.Component {
    constructor(){
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
                <br />
                <Jumbotron>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </Jumbotron>
                <Footer />
            </div>
        )
    }
}

export default createAccount;