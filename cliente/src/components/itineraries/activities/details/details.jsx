import React from "react";
import { connect } from "react-redux";
import Slide from "./slide";
import detailsAction from "../../../../redux/actions/detailsAction";

class details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      isFetching: false,
      Itinerary: [],
    };
  }

  async componentDidMount() {
    this.setState({ ...this.state, isFetching: true, Itinerary: this.props.Itinerary });
    await this.props.detailsAction(this.props.Itinerary._id);
    this.setState({ details: this.props.detailsReducer , });
  }

  render() {
    return (
        <Slide detailsReducer={this.state.details} Itinerary={this.state.Itinerary}/> 
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    detailsReducer: state.detailsReducer.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsAction: (data) => {
      return dispatch(detailsAction(data));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(details);
