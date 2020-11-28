import React from "react";
import { connect } from "react-redux";
import activitiesAction from "../../../redux/actions/activitiesAction";
import Details from "./details/details";
// import CommentsForm from "./commentsForm";
import CommentList from "./comments/commentList";
import Modal from "./comments/modal";
import getUser from "../../../redux/actions/getUserAction";

class activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: [],
      activities: [],
      currentUser: [],
      isConected: false,
      idItinerary: this.props.idItinerary,
    };
  }
  async componentDidMount() {
    if (!this.state.isConected) {
      await this.props.activitiesAction(this.props.idItinerary);
      this.setState({
        activities: this.props.activitiesReducer,
        isFetching: true,
        currentUser: this.props.loginReducer.currentUser,
      });
    }
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.changeComment === true) {
      await this.props.activitiesAction(this.props.idItinerary);
      this.setState({
        ...this.state,
        activities: this.props.activitiesReducer,
        isFetching: true,
      });
    }
  }

  render() {
    return (
      <div className="p-3 border border-secondary">
        <Details idItinerary={this.props.idItinerary} />
        <Modal
          idItinerary={this.props.idItinerary}
          name={this.state.currentUser.userName}
        />
        <CommentList activitiesReducer={this.state.activities} />
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
