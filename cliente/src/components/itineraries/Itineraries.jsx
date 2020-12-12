import React from "react";
import { connect } from "react-redux";
import itinerariesAction from "../../redux/actions/itinerariesAction";
import ItineraryList from "./ItineraryList";
import detailsAction from "../../redux/actions/detailsAction";

class Itinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
      isFetching: false,
    };
  }
  async componentDidMount() {
    console.log(this.props)
    if (!sessionStorage.getItem("token")) {
      this.props.history.push("/login");
    } else {
      await this.props.itinerariesAction(this.props.match.params.idCity);
      this.setState({
        ...this.state,
        isFetching: true,
        itineraries: this.props.itinerariesReducer,
      });
    }
  }

  render() {
    return (
      <>
        <h3 className="m-3">Itineraries List</h3>
        <ItineraryList
          itineraryReducer={this.props.itinerariesReducer}
        />
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
