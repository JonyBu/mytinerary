import React from "react";
import { connect } from "react-redux";

import { Card } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import itinerariesAction from "../../redux/actions/itinerariesAction";
import updateUserAction from "../../redux/actions/user/updateUserAction";

import CollapseIt from "./collapse";
import Rating from "./rating";
import Details from "./details";
import Menu from "../menu";

import image from "../../imagenes/fondo/wrongWay.jpg";

library.add(faHeartSolid, faHeartRegular);

class Itinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
      favorite: [],
      abierto: -1,
      itFav: [],
    };
  }

  async componentDidMount() {
    if (
      !this.props.loginReducer.isConected ||
      !sessionStorage.getItem("token")
    ) {
      this.props.history.push("/login");
    } else {
      await this.props.itinerariesAction(this.props.match.params.idCity);
      this.setState({
        ...this.state,
        itineraries: this.props.itinerariesReducer.itineraries,
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.loginReducer.isConected) {
      if (nextProps.loginReducer.isUpdated) {
        this.setState({
          ...this.state,
          itFav: this.props.loginReducer.currentUser.itinerariesFav,
        });
      } else {
        console.log("conectado");
      }
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <>
        <Menu />
        {this.props.itinerariesReducer.error ? (
          <Card className="pt-3 pb-3">
            <h5>{this.props.itinerariesReducer.message}</h5>
            <img src={image} alt="wrong way" className="imgFondo mt-3 mb-3" />
            <h5>Please retry it later</h5>
          </Card>
        ) : (
          this.state.itineraries.map((itinerary, i) => {
            const clickFav = () => {
              const it = this.props.loginReducer.currentUser.itinerariesFav;
              it.push(itinerary.title);
              const newData = {
                file: false,
                data:{
                  itinerariesFav: [it],
                  id: this.props.loginReducer.currentUser._id,
                }
              };
              this.props.updateUserAction(newData);

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

            return (
              <div key={i} >
                <Card className="izquierda">
                  {this.state.itFav.includes(itinerary.title) ? (
                    <FontAwesomeIcon
                      icon={faHeartSolid}
                      color="red"
                      size="lg"
                      pull="right"
                      id="iconFav"
                      className="mt-3 mr-1"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeartRegular}
                      color="lightgray"
                      size="lg"
                      pull="right"
                      id="iconFav"
                      onClick={() => clickFav()}
                      className="mt-3 mr-1"
                    />
                  )}
                  <h4 className="izquierda mt-3 ml-3">{itinerary.title}</h4>
                  <Rating />
                  <Details Itinerary={itinerary} />
                </Card>
                <CollapseIt itinerary={itinerary} />
              </div>
            );
          })
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    itinerariesReducer: state.itinerariesReducer,
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itinerariesAction: (data) => dispatch(itinerariesAction(data)),
    updateUserAction: (data) => dispatch(updateUserAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
