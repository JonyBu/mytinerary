import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import activitiesAction from "../../../redux/actions/activitiesAction";
import getUser from "../../../redux/actions/getUserAction";

import CommentList from "./comments/commentList";
import Modal from "./comments/modal";

class activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: [],
      activities: [],
      currentUser: [],
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
        isFetching: true,
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
        isFetching: true,
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
            <Modal
              idItinerary={this.props.Itinerary._id}
              name={this.props.loginReducer.currentUser.userName}
            />
          </Col>
        </Row>
        <CommentList activitiesReducer={this.state.activities} />
        <hr />
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
    activitiesAction: (data) => {
      return dispatch(activitiesAction(data));
    },
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(activities);
