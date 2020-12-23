import React from "react";
import { connect } from "react-redux";

import { Card, Row, Col, Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faWallet,
  faHeartBroken,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import getItinerariesFav from "../../redux/actions/itinerariesFavAction";

import Menu from "../menu";
import Footer from "../footer";

import image from "../../imagenes/fondo/wrongWay.jpg";

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      isConected: [],
      itFav: [],
    };
  }

  async componentDidMount() {
    await this.props.getItinerariesFav(this.props.currentUser.itinerariesFav);
    this.setState({
      currentUser: this.props.loginReducer.currentUser,
      isConected: this.props.loginReducer.isConected,
      itFav: this.props.itinerariesReducer,
    });
  }

  render() {
    return (
      <>
        <Menu />
        {!this.props.loginReducer.currentUser.itinerariesFav.length ? (
          this.props.history.push("/login")
        ) : this.props.loginReducer.currentUser.itinerariesFav.length === 0 ? (
          <Card className="pt-3 pb-3">
            <h3>You not have itineraries favorites</h3>
            <img src={image} alt="wrong way" className="imgFondo mt-3 mb-3" />
            <h3>Please first add an itinerary to favorites</h3>
          </Card>
        ) : (
          this.state.itFav.map((item, i) => {
            const imagen = require(`../../imagenes/usuarios/${item.userPic}`)
              .default;
            return (
              <Card key={i} className="m-3">
                <Row className="m-3">
                  <Col sm="2" style={{ textAlign: "center" }}>
                    <img
                      className="img-user-description"
                      src={imagen}
                      alt={item.userPic}
                    />
                    <p>
                      <small className="text-muted">{item.userName}</small>
                    </p>
                  </Col>
                  <Col sm="10" className="izquierda">
                    <h5>{item.title}</h5>
                    <small className="text-muted">
                      {item.cityName} - {item.countryName}{" "}
                    </small>
                    <p>{item.description}</p>

                    <Row>
                      <Col xs="12" sm="auto">
                        <p>
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                          score:{" "}
                          {(item.rating / item.quantityRating).toFixed(2)}
                          /5
                        </p>
                      </Col>
                      <Col xs="12" sm="auto">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />{" "}
                        duration: {item.duration}
                      </Col>
                      <Col xs="12" sm="auto">
                        <FontAwesomeIcon icon={faWallet} className="mr-2" />{" "}
                        cost: ${item.cost}
                      </Col>
                    </Row>

                    {item.hashtag.map((has, i) => (
                      <span
                        key={i}
                        className="badge badge-pill badge-info m-1 "
                      >
                        {has}
                      </span>
                    ))}
                  </Col>
                </Row>

                <Row className="m-3">
                  <Col xs="12" sm="6" className="mb-2">
                    <Button color="success" outline block>
                      <FontAwesomeIcon icon={faPlay} className="mr-2" />
                      To Go
                    </Button>
                  </Col>
                  <Col xs="12" sm="6" className="mb-2">
                    <Button color="danger" outline block>
                      <FontAwesomeIcon icon={faHeartBroken} className="mr-2" />
                      Stop Follow
                    </Button>
                  </Col>
                </Row>
              </Card>
            );
          })
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
    currentUser: state.loginReducer.currentUser,
    itinerariesReducer: state.itinerariesReducer.itineraries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItinerariesFav: (data) => dispatch(getItinerariesFav(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
