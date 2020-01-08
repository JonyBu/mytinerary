import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Form, Alert } from 'reactstrap';

const CommentList = (props) =>
    
    props.activitiesReducer.map((activities, i) =>
    
        <div key={i}>
            <InputGroup style={{ padding: '1vh'}}>
                <ListGroupItem style={{ flex: '1 1 auto' }}>{activities.comments}</ListGroupItem>
                <InputGroupAddon addonType="append">
                    <Button  color="danger" >X</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );

export default CommentList;