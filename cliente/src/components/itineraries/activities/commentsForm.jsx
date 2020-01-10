import React from 'react';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import activitiesAction from '../../../redux/actions/activitiesAction'

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            idItinerary: this.props.idItinerary,
            isFetching: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ ...this.state, comments: e.target.value, isFetching: true });
    }

    handleSubmit = (e) => {
        if (this.state.isFetching === false) {
            alert("Ingrese un campo")
        } else {
            e.preventDefault();
            const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';
            const userObject = {
                comments: this.state.comments,
                idItinerary: this.state.idItinerary
            }
            axios.post(QUOTE_SERVICE_URL, userObject)
                .then(response => console.log('succes: ', response.data))
                .catch(error => console.log('error: ', error))
        }
    }

    render() {
        return (
            <div className="">
                <h5 className="izquierda">Coments</h5>
                <br />
                <Form >
                    <InputGroup>
                        <Input type="text" name="comments" id={this.props.idItinerary} placeholder="Enter a comment" onChange={this.onChange.bind(this)} />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={this.handleSubmit}>></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        activitiesAction: (data) => {
            return dispatch(activitiesAction(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentsForm);