import React from "react";
import { ListGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

const CityList = (props) => {
  function cityDisponible(cityName) {
    if (cityName === "London") {
      return "mt-3";
    }
    return "disabled mt-3";
  }
  return props.citiesReducer.map((city, i) => (
    <ListGroup key={i}>
      <Link to={`/itineraries/${city._id}`} className="text-decoration-none">
        <Button
          block
          outline
          className={cityDisponible(city.name)}
          color="danger"
        >
          {city.name} {city.country} 
        </Button>
      </Link>
    </ListGroup>
  ));
};

export default CityList;
