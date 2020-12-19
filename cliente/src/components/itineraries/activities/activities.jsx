import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";

import commentActionDelete from "../../../redux/actions/commentActionDelete";
import activitiesAction from "../../../redux/actions/activitiesAction";
import getUser from "../../../redux/actions/getUserAction";

import Modal from "./comments/modal";
import CommentList from "./comments/commentList"

class activities extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      isConected: false,
      Itinerary: [],
    };
  }
  async componentDidMount() {
    if (!this.state.isConected) {
      await this.props.activitiesAction(this.props.Itinerary._id);
      this.props.getUser();
      this.setState({
        ...this.state,
        Itinerary: this.props.Itinerary,
        activities: this.props.activitiesReducer,
        currentUser: this.props.loginReducer.currentUser,
        isConected: this.props.loginReducer.isConected,
      });
    }
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.changeComment === true) {
      await this.props.activitiesAction(this.props.Itinerary._id);
      this.setState({
        activities: this.props.activitiesReducer,
      });
    }
  }


  render() {
    return (
      <div className="p-3">
        <Row>
          <Col>
            <h5>Comments</h5>
          </Col>
          <Col className="botonComment">
            <Modal idItinerary={this.state.Itinerary._id} />
          </Col>
        </Row>
        <CommentList comments={this.state.activities}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activitiesReducer: state.activitiesReducer.activities,
    changeComment: state.activitiesReducer.changeComment,
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activitiesAction: (data) => dispatch(activitiesAction(data)),
    commentActionDelete: (data) => dispatch(commentActionDelete(data)),
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(activities);
