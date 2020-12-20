import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";

import activitiesAction from "../../../redux/actions/activitiesAction";

import Modal from "./comments/modal";
import CommentList from "./comments/commentList"

class activities extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      isConected: [],
      Itinerary: [],
    };
  }
  async componentDidMount() {
    if (this.state.isConected) {
      await this.props.activitiesAction(this.props.Itinerary._id);
      this.setState({
        ...this.state,
        Itinerary: this.props.Itinerary,
        activities: this.props.activitiesReducer,
        isConected: this.props.loginReducer.isConected,
      });
    }else{
      this.props.history.push("/login");
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(activities);
