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
    };
  }

  async componentDidMount() {
    this.setState({ ...this.state, isFetching: true });
    await this.props.detailsAction(this.props.idItinerary);
    this.setState({ details: this.props.detailsReducer });
  }

  render() {
    return (
      <div>
        <Slide detailsReducer={this.state.details} />
      </div>
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
