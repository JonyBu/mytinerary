import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

library.add(faStarRegular, faStarSolid);

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
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
              size="lg"
              pull="right"
              className="iconStar"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              // onClick={}
            />
          </label>
        );
      })}
      <p>The rating is {rating}</p>
    </div>
  );
};

export default Rating;
