import React from "react";
import { Button, Form, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { connect } from "react-redux";
import commentAction from "../../../redux/actions/commentAction";
import commentActionUpdate from "../../../redux/actions/commentActionUpdate";

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      nuevo: "",
      id: this.props.id,
      idItinerary: this.props.idItinerary,
      isFetching: [],
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      comments: e.target.value,
      id: this.props._id,
      nuevo: this.props.nuevo,
      isFetching: true,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.nuevo === false) {
      this.props.commentActionUpdate(this.state);
    } else {
      this.props.commentAction(this.state);
      this.limpiaCampo();
    }
  };

  limpiaCampo() {
    let comment = document.querySelector("input");
    comment.value = "";
  }

  render() {
    return (
      <div className="">
        <h5 className="izquierda">Coments</h5>
        <br />
        <Form>
          <InputGroup>
            <Input
              type="text"
              name="comments"
              id={this.props.idItinerary}
              placeholder="Enter a comment"
              onChange={this.onChange.bind(this)}
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={this.handleClick}>
                »
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentAction: (data) => dispatch(commentAction(data)),
    commentActionUpdate: (data) => dispatch(commentActionUpdate(data)),
  };
};

export default connect(null, mapDispatchToProps)(CommentsForm);
