import React from "react";
import { connect } from "react-redux";

import { Card } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import itinerariesAction from "../../redux/actions/itinerariesAction";

import CollapseIt from "./collapse";
import Rating from "./rating";
import Details from "./details";

import Menu from "../menu";

library.add(faHeartSolid, faHeartRegular);

class Itinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
      favorite: [],
      abierto: -1,
    };
  }

  async componentDidMount() {
    if (!this.props.loginReducer.isConected ||
      !sessionStorage.getItem("token")) {
      this.props.history.push("/login");
    } else {
      await this.props.itinerariesAction(this.props.match.params.idCity);
      this.setState({
        ...this.state,
        itineraries: this.props.itinerariesReducer,
      });
    }
  }

  render() {
    return (
      <>
        <Menu />
        {this.props.itinerariesReducer.map((itinerary, i) => {
          const clickFav = () => {
            const found = this.state.favorite.indexOf(itinerary.title);
            if (found === -1) {
              this.setState({
                ...this.state.favorite,
                favorite: itinerary.title,
              });
            } else {
              this.state.favorite.splice(found, 1);
            }
          };

          const toggle = (numID) => {
            this.setState({ abierto: numID });
          };

          return (
            <>
            <Card key={i} className="izquierda" >
              <FontAwesomeIcon
                icon={
                  this.state.abierto === i ||
                  this.state.favorite.includes(itinerary.title)
                    ? faHeartSolid
                    : faHeartRegular
                }
                color={
                  this.state.abierto === i ||
                  this.state.favorite.includes(itinerary.title)
                    ? "red"
                    : "lightgray"
                }
                size="lg"
                pull="right"
                id="iconFav"
                onMouseEnter={() => toggle(i)}
                onMouseLeave={() => toggle(-1)}
                onClick={() => clickFav()}
                className="mt-3 mr-1"
              />
              <h4 className="izquierda mt-3 ml-3">{itinerary.title}</h4>
              <Rating />
              <Details Itinerary={itinerary} />
            </Card>
              <CollapseIt itinerary={itinerary} />
            </>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itinerariesReducer: state.itinerariesReducer.itineraries,
    loginReducer: state.loginReducer
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
