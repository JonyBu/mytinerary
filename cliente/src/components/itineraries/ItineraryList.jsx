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
  const [favorite, setFavorite] = useState(null);
  const [hover, setHover] = useState(null);
  const itineraries = props.itineraryReducer;
  console.log(itineraries)

  return props.itineraryReducer.map((itinerary, i) => {
    
    function clickFav(fav) {
      setFavorite(fav);
    }
    const fav = itinerary.title
    console.log(itinerary)
   
    // console.log(favorite)
    // console.log(hover)
    return (
      <div key={i}>
        <Card>
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
                    icon={ hover || fav == favorite ? faHeartSolid : faHeartRegular}
                    color={ hover || fav == favorite ? "red" : "gray"}
                    size="lg"
                    pull="right"
                    id="iconFav"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(null)}
                    // onClick={()=>setFavorite(fav)}
                    onClick={()=>clickFav(fav)}
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
            <br />
          </CardBody>
        </Card>
        <br />
      </div>
    );
  });
};

export default ItineraryList;
