import React from 'react';

const CityList = ({ cities }) =>
  cities.map((city, i) => <li key={i}>{city.name} {city.country}</li>)

export default CityList;
