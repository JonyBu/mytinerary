import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="m-3">
        <Link to="/">
          <FontAwesomeIcon
            className="m-3"
            icon={faHome}
            size={"3x"}
            color="#394E56"
          />
        </Link>
      </div>
    );
  }
}

export default Footer;
