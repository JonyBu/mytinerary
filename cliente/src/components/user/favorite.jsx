import React from "react";
import { connect } from "react-redux";

import getUser from "../../redux/actions/getUserAction";
import getItinerariesFav from "../../redux/actions/itinerariesFavAction";

import Menu from "../menu";
import Footer from "../footer";

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.loginReducer.currentUser,
      isConected: props.loginReducer.isConected,
    };
  }

  async componentWillMount() {

  }

  render() {

    return (
      <>
        <Menu/>
        <h1>Itinerarios Favoritos</h1>
        <div>


        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
    getItinerariesFav: state.getItinerariesFav

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => dispatch(getUser(data)),
    getItinerariesFav: (data) => dispatch(getItinerariesFav(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
