import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";

import Activities from "../itineraries/activities/activities";

const CollapseIt = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        color="primary"
        block
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        View All
      </Button>
      <Collapse isOpen={isOpen}>
        <Activities Itinerary={props.itinerary} />
      </Collapse>
    </>
  );
};

export default CollapseIt;
