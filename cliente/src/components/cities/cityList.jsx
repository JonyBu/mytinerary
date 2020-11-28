import React from "react";
import { ListGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

const CityList = (props) =>
  props.citiesReducer.map((city, i) => (
      <ListGroup>
        <Link to={`/itineraries/${city._id}`} className="text-decoration-none">
          <Button block outline className="mt-1" color="danger">
            {city.name} {city.country}
          </Button>
        </Link>
      </ListGroup>
  ));


  

export default CityList;
