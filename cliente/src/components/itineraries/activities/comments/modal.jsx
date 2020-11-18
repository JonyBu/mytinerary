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

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameButton: "",
      comments: "",
      id: this.props.id,
      idItinerary: this.props.idItinerary,
      isFetching: [],
    };
    this.getNameButton.bind(this);
  }

  toggle = () => {
    this.setState({ abierto: !this.state.abierto });
    console.log(this.state);
  };

  onChange = (e) => {
    console.log(this.props);
    this.setState({
      ...this.state,
      comments: e.target.value,
      id: this.props._id,
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
      this.setState({ nameButton: "Edit" });
    } else {
      this.setState({ nameButton: "New Comment" });
    }
  };

  componentDidMount() {
    this.getNameButton();
  }

  render() {
    return (
      <>
        <Button color="primary" onClick={this.toggle} outline block>
          {this.state.nameButton}
        </Button>
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
