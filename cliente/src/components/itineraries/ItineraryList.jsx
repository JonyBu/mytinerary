import React, { useState } from "react";
import { Card } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import CollapseIt from "./collapse";
import Rating from "../itineraries/activities/details/rating";
import Details from "../itineraries/activities/details/details";

library.add(faHeartSolid, faHeartRegular);

const ItineraryList = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [abierto, setHover] = useState(-1);
  const [details, setDetails] = useState(props.detailsReducer);

  return props.itineraryReducer.map((itinerary, i) => {
    const clickFav = () => {
      const found = favorite.indexOf(itinerary.title);
      if (found === -1) {
        setFavorite([...favorite, itinerary.title]);
      } else {
        favorite.splice(found, 1);
      }
    };

    const toggle = (numID) => {
      setHover(numID);
    };

    return (
      <Card key={i} className="izquierda mb-3">
        <FontAwesomeIcon
          icon={
            abierto === i || favorite.includes(itinerary.title)
              ? faHeartSolid
              : faHeartRegular
          }
          color={
            abierto === i || favorite.includes(itinerary.title)
              ? "red"
              : "lightgray"
          }
          size="lg"
          pull="right"
          id="iconFav"
          onMouseEnter={() => toggle(i)}
          onMouseLeave={() => toggle(-1)}
          onClick={() => clickFav()}
        />
        <h4 className="izquierda m-2">{itinerary.title}</h4>

        <Rating itinerary={itinerary} />

        <Details Itinerary={itinerary} />

        <CollapseIt itinerary={itinerary} />
      </Card>
    );
  });
};

export default ItineraryList;
