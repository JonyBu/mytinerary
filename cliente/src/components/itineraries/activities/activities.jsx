import React from "react";
import { connect } from "react-redux";
import activitiesAction from "../../../redux/actions/activitiesAction";
import Details from "./details/details";
// import CommentsForm from "./commentsForm";
import CommentList from "./comments/commentList";
import Modal from "./comments/modal";

class activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: [],
      activities: [],
      idItinerary: this.props.idItinerary,
    };
  }
  async componentDidMount() {
    
    await this.props.activitiesAction(this.props.idItinerary);
    this.setState({
      ...this.state,
      activities: this.props.activitiesReducer,
      isFetching: true,
    });
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
      <div>
        <Details idItinerary={this.props.idItinerary} />
        <br />
        <Modal idItinerary={this.props.idItinerary}/>
        {/* <CommentsForm idItinerary={this.props.idItinerary} /> */}
        <br />
        <div>
          <CommentList activitiesReducer={this.state.activities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activitiesReducer: state.activitiesReducer.activities,
    changeComment: state.activitiesReducer.changeComment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activitiesAction: (data) => {
      return dispatch(activitiesAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(activities);
