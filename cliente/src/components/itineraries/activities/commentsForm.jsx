import React from 'react';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import axios from 'axios';

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            idItinerary: this.props.idItinerary
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';
        const userObject = {
            comments: this.state.comments,
            idItinerary: this.state.idItinerary
        }
        axios.post(QUOTE_SERVICE_URL, userObject)
            .then(response => console.log('succes: ' , response.data))
            .catch(error => console.log('error: ' , error)) 
    } 

    delete = (e) => {
        const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';
        axios.delete(QUOTE_SERVICE_URL, {params:{_id:this.props._id}})
        .then(response => console.log('succes: ' , response.data))
        .catch(error => console.log('error: ' , error)) 
    }

    render() {
        console.log("PROPS:", this.props);
        console.log("STATE", this.state);
        
        return (
            <div className="">
                <h5 className="izquierda">Coments</h5>
                <br />
                <Form >
                    <InputGroup>
                        <Input type="text" name="comments" id={this.props.idItinerary} placeholder="Enter a comment" onChange={this.onChange.bind(this)}/>
                        <InputGroupAddon addonType="append">
                            <Button  color="primary" onClick={this.handleSubmit}>></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        );
    }

}

export default CommentsForm;