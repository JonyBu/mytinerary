import React, { useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

library.add(faStarRegular, faStarSolid);

const Rating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [itinerary, setItinerary] = useState(props.itinerary)

  return (
    <div className="rating ml-1">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={
                ratingValue <= (hover || rating) ? faStarSolid : faStarRegular
              }
              color={ratingValue <= (hover || rating) ? "gold" : "lightgray"}
              size="1x"
              pull="right"
              className="iconStar"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {/* <small className="text-muted">The rating is ({itinerary.rating} / {itinerary.quantityRating})</small> */}
    </div>
  );
};

export default Rating;
