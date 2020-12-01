import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

const OtherCity = () => (
  <div>
    <br />
    <p>Sin itinerarios en esta ciudad</p>
    <p>Por ahora Itinerarios solo en londres</p>
    <Link to="../cities">Elige otra ciudad</Link>
    <Footer />
  </div>
);

export default OtherCity;
