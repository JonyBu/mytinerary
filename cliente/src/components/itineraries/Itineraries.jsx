import React from "react";
import { connect } from "react-redux";
import itinerariesAction from "../../redux/actions/itinerariesAction";
import ItineraryList from "./ItineraryList";

class Itinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
      isFetching: false,
    };
  }
  async componentDidMount() {
    if (!sessionStorage.getItem("token")) {
      this.props.history.push("/login");
    } else {
      this.setState({ ...this.state, isFetching: true });
      await this.props.itinerariesAction(this.props.match.params.idCity);
    }
  }

  render() {
    return (
      <>
        <h3 className="izquierda m-3">Listado de itinerarios</h3>
        <ItineraryList itineraryReducer={this.props.itinerariesReducer} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itinerariesReducer: state.itinerariesReducer.itineraries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itinerariesAction: (data) => {
      return dispatch(itinerariesAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
