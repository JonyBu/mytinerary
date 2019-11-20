import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link } from 'react-router-dom';

const CityList = (props) =>

  props.citiesReducer.map((city, i) => 
    <ListGroup>
        <ListGroupItem key={i}>
            <Link to="/itineraries/:_id">{city.name} {city.country}</Link>
        </ListGroupItem>
    </ListGroup>
    );

export default CityList;
