import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const CityList = (props) =>

    props.citiesReducer.map((city, i) =>
        <div key={i}>
            <ListGroup>
                <ListGroupItem >
                    <Link to={`/itineraries/${city.name}`}>{city.name} {city.country}</Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    );

export default CityList;
