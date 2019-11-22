import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CommentList = (props) =>

    props.activitiesReducer.map((activities, i) =>
        <div key={i}>
            <ListGroup>
                <ListGroupItem >
                    {activities.comments}
                </ListGroupItem>
            </ListGroup>
        </div>
    );

export default CommentList;