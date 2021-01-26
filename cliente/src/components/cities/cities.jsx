import React from "react";
import { connect } from "react-redux";
import { ListGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import citiesAction from "../../redux/actions/citiesAction";

import FilterForm from "./filterCities.jsx";
import Footer from "../footer";
import Menu from "../menu";

import imagen from "../../imagenes/fondo/cityss.jpg";

class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      filteredCities: [],
    };
  }

  async componentDidMount() {
    if (
      this.props.loginReducer.isConected && sessionStorage.getItem("token")
    ) {
      if (this.props.loginReducer.isReady) {
        await this.props.citiesAction();
        this.setState({ filteredCities: this.props.citiesReducer });
      }
    } else {
      this.props.history.push("/login");
    }
  }

  filterCities = (cityFilter) => {
    let filteredCities = this.props.citiesReducer;
    filteredCities = filteredCities.filter((cities) => {
      let cityName = cities.name.toLowerCase() + cities.country.toLowerCase();
      return cityName.indexOf(cityFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredCities,
    });
  };

  cityDisponible = (avaible) => {
    if (avaible) {
      return "mt-3";
    }
    return "disabled mt-3";
  };

  render() {
    return (
      <>
        <Menu />
        <img src={imagen} alt="" className="baner" />
        <h1 className="m-3">City list</h1>
        <FilterForm match={this.props.match} onChange={this.filterCities} />
        {this.state.filteredCities.map((city, i) => (
          <ListGroup key={i}>
            <Link
              to={`/itineraries/${city._id}`}
              className="text-decoration-none"
            >
              <Button
                block
                outline
                className={this.cityDisponible(city.itineraries)}
                color="danger"
              >
                {city.name} - {city.country}
              </Button>
            </Link>
          </ListGroup>
        ))}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
    citiesReducer: state.citiesReducer.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    citiesAction: () => {
      return dispatch(citiesAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
