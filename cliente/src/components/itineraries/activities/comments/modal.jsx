import React from "react";
import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import commentAction from "../../../../redux/actions/commentAction";
import commentActionUpdate from "../../../../redux/actions/commentActionUpdate";

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.loginReducer.currentUser,
      idItinerary: props.idItinerary,
      comment: props.comment,
    };
  }

  toggle = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  onChange = (e) => {
    var dateEnd = Date.now();
    if (this.props.from === "edit") {
      this.setState({
        ...this.state,
        comments: e.target.value,
        date: dateEnd,
        userName: this.state.user.userName,
        userPic: this.state.user.profilePic,
        idItinerary: this.props.idItinerary,
        id: this.props._id,
        like: this.props.comment.like,
        dislike: this.props.comment.dislike,
      });
    } else if (this.props.from === "Add Comment") {
      this.setState({
        ...this.state,
        comments: e.target.value,
        date: dateEnd,
        userName: this.state.user.userName,
        userPic: this.state.user.profilePic,
        idItinerary: this.props.idItinerary,
        like: 0,
        dislike: 0,
      });
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    this.toggle();
    if (this.props.from === "edit") {
      this.props.commentActionUpdate(this.state);
    } else {
      this.props.commentAction(this.state);
    }
  };

  render() {
    return (
      <>
        {this.props.from === "edit" ? (
          <FontAwesomeIcon
            icon={faEdit}
            color="lightgray"
            size="lg"
            pull="right"
            id="iconEdit"
            onClick={this.toggle}
          />
        ) : (
          <Button color="info" className="" onClick={this.toggle}>
            {this.props.from}
          </Button>
        )}

        <Modal isOpen={this.state.abierto} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Comment</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="comments"
              id={this.props.idItinerary}
              placeholder="Enter a comment"
              onChange={this.onChange.bind(this)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleClick}>
              Agree
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentAction: (data) => dispatch(commentAction(data)),
    commentActionUpdate: (data) => dispatch(commentActionUpdate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
