import React from "react";
import { connect } from "react-redux";

import { Card, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid, faWallet  } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faClock, faStar  } from "@fortawesome/free-regular-svg-icons";

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
    if (!sessionStorage.getItem("token")) {
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
            <Card key={i} className="izquierda mb-3">
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
              />
              <h4 className="izquierda m-2">{itinerary.title}</h4>
              {/* <Row className="m-auto" >
                <Col>
                    <Rating />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faClock} className="mr-2" /> duration:{" "}
                  {itinerary.duration}
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faWallet} className="mr-2" /> cost: $
                  {itinerary.cost}
                </Col>
              </Row> */}
              <Rating />
              <Details Itinerary={itinerary} />
              <CollapseIt itinerary={itinerary} />
            </Card>
          );
        })}
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
