import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CityList = (props) =>
  props.citiesReducer.map((city, i) => <ListGroup><ListGroupItem key={i}>{city.name} {city.country}</ListGroupItem></ListGroup>)

export default CityList;
