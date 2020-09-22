import React from 'react';
import { Alert, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const CityList = (props) =>

    props.citiesReducer.map((city, i) =>
        <div key={i}>
            <ListGroup>
                <ListGroupItem >
                    <Link to={`/itineraries/${city._id}`}>{city.name} {city.country}</Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
    alert("Elegir London")

export default CityList;
