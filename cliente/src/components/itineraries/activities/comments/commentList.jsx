import React from 'react';
import { InputGroup, InputGroupAddon, Button, ListGroupItem } from 'reactstrap';
import commentActionDelete from '../../../../redux/actions/commentActionDelete';
import { connect } from 'react-redux'

const CommentList = (props) => {
    return (
        props.activitiesReducer.map((activities, i) =>
            <div key={i}>
                <InputGroup style={{ padding: '1vh' }}>
                    <ListGroupItem style={{ flex: '1 1 auto' }}>{activities.comments}</ListGroupItem>
                    <InputGroupAddon addonType="append">
                        <Button color="danger" onClick={function () { props.commentActionDelete(activities._id) }}>X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentActionDelete: (data) => dispatch(commentActionDelete(data))
    }
}

export default connect(null, mapDispatchToProps)(CommentList)

