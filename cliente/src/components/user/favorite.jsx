import React from "react";
import { connect } from "react-redux";

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
    await this.props.getItinerariesFav('5dcebe0ab015a018747a9b55');
    console.log(this.props)
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
  console.log(state)
  return {
    loginReducer: state.loginReducer,
    currentUser: state.loginReducer.currentUser,
    // getItinerariesFav: state.getItinerariesFav
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItinerariesFav: (data) => dispatch(getItinerariesFav(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
