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
import commentAction from "../../../../redux/actions/commentAction";
import commentActionUpdate from "../../../../redux/actions/commentActionUpdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idItinerary: this.props.idItinerary,
      id: this.props._id,
      comments: "",
      name: "",
      date: "",
    };
    this.getNameButton.bind(this);
  }

  async componentDidMount() {
    if (!this.state.nameButton) {
      this.getNameButton();
    }
  }

  toggle = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  onChange = (e) => {
    console.log(this.props);
    console.log(this.state);
    var dateEnd = Date.now();
    this.setState({
      ...this.state,
      comments: e.target.value,
      date: dateEnd,
      name: this.props.name,
      isFetching: true,
    });
    console.log(this.state);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.toggle();

    if (this.state.id) {
      this.props.commentActionUpdate(this.state);
    } else {
      this.props.commentAction(this.state);
    }
  };

  getNameButton = () => {
    if (this.props._id) {
      return "edit";
    } else {
      return "Add Comment";
    }
  };

  render() {
    return (
      <>
        {this.getNameButton() === "edit" ? (
          <FontAwesomeIcon
            icon={faEdit}
            color="gray"
            size="lg"
            pull="right"
            id="iconEdit"
            onClick={this.toggle}
          />
        ) : (
          <Button color="info" className="mt-3" onClick={this.toggle} block>
            {this.getNameButton()}
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

const mapDispatchToProps = (dispatch) => {
  return {
    commentAction: (data) => dispatch(commentAction(data)),
    commentActionUpdate: (data) => dispatch(commentActionUpdate(data)),
  };
};

export default connect(null, mapDispatchToProps)(ModalEdit);
