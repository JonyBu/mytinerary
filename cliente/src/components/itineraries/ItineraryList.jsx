import React, { useState } from "react";
import { CardBody, Card } from "reactstrap";
import { Media } from "reactstrap";
import CollapseIt from "./collapse";
import Hash from "./hash";
import Rating from "./activities/details/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faHeartRegular, faHeartSolid);

const ItineraryList = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [abierto, setHover] = useState(-1);

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
      <Card key={i} className="mb-3">
        <CardBody>
          <Media>
            <Media left>
              <Media
                className="imageProfile"
                object
                src={require(`../../imagenes/itinerarios/London/${itinerary.profilePic}.png`)}
                alt={itinerary.profilePic}
              />
              <br />
              <h6>{itinerary.profilePic}</h6>

              <Rating />
            </Media>
            <Media body>
              <Media heading>
                {itinerary.title}
                <FontAwesomeIcon
                  icon={
                    abierto === i || favorite.includes(itinerary.title)
                      ? faHeartSolid
                      : faHeartRegular
                  }
                  color={
                    abierto === i || favorite.includes(itinerary.title)
                      ? "red"
                      : "gray"
                  }
                  size="lg"
                  pull="right"
                  id="iconFav"
                  onMouseEnter={() => toggle(i)}
                  onMouseLeave={() => toggle(-1)}
                  onClick={() => clickFav()}
                />
              </Media>
              <br />
              Likes: {itinerary.rating} | {itinerary.duration} Hours | $
              {itinerary.cost}
              <br />
              <br />
              <Hash hashtag={itinerary.hashtag} />
              <br />
              <br />
            </Media>
          </Media>
          <CollapseIt idItinerary={itinerary._id} />
        </CardBody>
      </Card>
    );
  });
};

export default ItineraryList;
