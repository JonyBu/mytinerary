import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearchLocation } from "@fortawesome/free-solid-svg-icons";

import Footer from "../footer";

const OtherCity = () => (
  <>
    <Row className="mt-5 mb-3">
      <Col>
        <Link to="/cities" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon icon={faSearchLocation} size="2x" className="mr-3" />
          Choose another city
        </Link>
      </Col>
      <Col>
        <Link className="botonItinerary" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon
            icon={faPlus}
            color="lightgreen"
            size="2x"
            className="botonItinerary mr-3"
          />
          Add a new itinerary
        </Link>
      </Col>
    </Row>
    <Footer />
  </>
);

export default OtherCity;
