import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../imagenes/MYtineraryLogo.png";

import ImageCarousel from "../components/carousel";
import Menu from "../components/menu";
import MenuUser from "../components/menuUser";
import { connect  } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltCircleRight as faArrowAltCircleRightSolid } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight as faArrowAltCircleRightRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faArrowAltCircleRightRegular, faArrowAltCircleRightSolid);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isConected: {},
      currentUser: {},
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser.currentUser,
      isConected: this.props.currentUser.isConected,
    });
  }

  setHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <>
        {this.state.isConected ? (
          <MenuUser
            isConected={this.state.isConected}
            currentUser={this.state.currentUser}
          />
        ) : (
          <Menu />
        )}

        <div className="mt-3">
          <img
            id="logo"
            src={imageLogo}
            alt="logo mytinerary"
            className="mt-3"
          />
          <p className="m-3">
            Find your perfect trip, designed by insiders who know and love teir
            cities.
          </p>
          <h2 className="m-3">Start browsing</h2>
          <Link to="./cities">
            <FontAwesomeIcon
              size="8x"
              color={this.state.hover ? "#DC2B00" : "#394E56"}
              icon={faArrowAltCircleRightRegular}
              onMouseEnter={this.setHover.bind(this)}
              onMouseLeave={this.setHover.bind(this)}
              onClick={() => console.log(this.state.hover)}
            />
          </Link>
          <h2 className="m-3"> Popular itineraries</h2>
          <ImageCarousel />
        </div>
        <div className="text-dark-50 m-3">
          <div className="container text-center">
            <small>© 2020 Copyright | All Rights Reserved</small>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer,
  };
};


export default connect(mapStateToProps, null)(Home);
