import React  from "react";
import { InputGroup, InputGroupAddon, Button, ListGroupItem } from "reactstrap";
import commentActionDelete from "../../../../redux/actions/commentActionDelete";

import { connect } from "react-redux";
import Modal from "./modal";

const CommentList = (props) => {
  var {
    _id
  } = props;

  return props.activitiesReducer.map((activities, i) => (
    <div key={i}>
      <InputGroup style={{ padding: "1vh" }}>
        <ListGroupItem style={{ flex: "1 1 auto" }}>
          {activities.comments}
        </ListGroupItem>

        <InputGroupAddon addonType="append">
          <Button
            color="danger"
            outline
            onClick={function () {
              props.commentActionDelete(activities._id);
            }}
          >
            X
          </Button>
          <Button
            color="primary"
            outline
            onClick={function () {
              props.commentActionUpdate(activities._id);
            }}
          >
            0
          </Button> 
          <Modal _id={_id=activities._id}/>
        </InputGroupAddon>
      </InputGroup>
      
    </div>
  ));
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActionDelete: (data) => dispatch(commentActionDelete(data)),
    
  };
};

export default connect(null, mapDispatchToProps)(CommentList);
