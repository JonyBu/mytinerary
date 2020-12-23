import React, { useState } from "react";
import { Collapse, Button, Row, Col , Card} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import Activities from "../itineraries/activities/activities";

const CollapseIt = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itinerary] = useState(props.itinerary);
  const toggle = () => setIsOpen(!isOpen);

  const imagen = require(`../../imagenes/usuarios/${itinerary.userPic}`)
    .default;

  return (
    <>
      <Button color="info" block onClick={toggle} className="mb-3" size="sm">
        View All
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className="details izquierda p-3">
          <h5>Description</h5>
          <hr />
          <Row>
            <Col sm="2" style={{ textAlign: "center" }}>
              <img
                className="img-user-description"
                src={imagen}
                alt={itinerary.userPic}
              />
              <small className="text-muted">{itinerary.userName}</small>
            </Col>
            <Col sm="10">
              <h5>{itinerary.title}</h5>
              <small className="text-muted">
                {itinerary.cityName} - {itinerary.countryName}{" "}
              </small>
              <p>{itinerary.description}</p>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    score:
                    {" "}{(itinerary.rating / itinerary.quantityRating).toFixed(2)}
                    /5
                  </p>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faClock} className="mr-2" /> duration:{" "}
                  {itinerary.duration}
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faWallet} className="mr-2" /> cost: $
                  {itinerary.cost}
                </Col>
              </Row>
              {itinerary.hashtag.map((has, i) => (
                <span key={i} className="badge badge-pill badge-info m-1 ">
                  {has}
                </span>
              ))}
            </Col>
          </Row>
        </Card>
        <Activities Itinerary={itinerary} />
      </Collapse>
    </>
  );
};

export default CollapseIt;
