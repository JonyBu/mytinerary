import React from 'react';
import { connect } from 'react-redux';

import activitiesAction from '../../../redux/actions/activitiesAction';
import Details from './details/details';
import CommentsForm from './commentsForm';
import axios from 'axios'
// import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import CommentList from './comments/commentList';
// import { ListGroupItem } from 'reactstrap';


class activities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            isFetching: [],
            activities: []
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true })
        await this.props.activitiesAction(this.props.idItinerary);
        //this.setState({ activities: this.props.activitiesReducer })
    }

    // onChange = (e) => {
    //     this.setState({ comments: e.target.value, isFetching: true });
    // }

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
        console.log(this.state);
        return (
            <div>
                {/* {this.state.activities.map((itineraries) => <Details idItinerary={itineraries._id} />) } */}
                <Details idItinerary={this.props.idItinerary} />
                <br />
                <div>
                    <CommentList activitiesReducer={this.state.activities} />
                    
                     {/* {activitiesReducer = {this.state.activities}
                     console.log(this.state.activitiesReducer)} */}
                    {/* {this.activities.map((activities, i) =>
                        <div key={i}>
                            <InputGroup style={{ padding: '1vh' }}>
                                <ListGroupItem style={{ flex: '1 1 auto' }}>{activities.comments}</ListGroupItem>
                                <InputGroupAddon addonType="append">
                                    <Button color="danger" onClick={function () { this.handleDelete(activities._id) }}>X</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    )} */}
                </div>
                <br />
                <CommentsForm idItinerary={this.props.idItinerary} />
                {/* <div className="">
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
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activitiesReducer: state.activitiesReducer.activities,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activitiesAction: (data) => {
            return dispatch(activitiesAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(activities);