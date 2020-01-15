import React from 'react';
import { InputGroup, InputGroupAddon, Button, ListGroupItem } from 'reactstrap';
import axios from 'axios';

const CommentList = (props) => {
    const handleDelete = (id) => {
        const data = { _id: id }
        const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';
        axios.delete(QUOTE_SERVICE_URL, { data })
            .then(response => console.log('succes: ', response.data))
            .catch(error => console.log('error: ', error))
    }

    return (
        props.activitiesReducer.map((activities, i) =>
            <div key={i}>
                <InputGroup style={{ padding: '1vh' }}>
                    <ListGroupItem style={{ flex: '1 1 auto' }}>{activities.comments}</ListGroupItem>
                    <InputGroupAddon addonType="append">
                        <Button color="danger" onClick={function () { handleDelete(activities._id) }}>X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    )
}

export default CommentList;
