import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Slide = (props) => {
  const Itinerary = props.Itinerary;

  return (
    <Slider className="slider-wrapper">
      {props.detailsReducer.map((item, index) => {
        const imagen = require(`../../../../imagenes/detalles/London/${item.activityPic}.jpg`)
          .default;
        return (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url(${imagen}) no-repeat center center` }}
          >
            <div className="inner">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <section>
              {/* <img src={require(`../../../../imagenes/itinerarios/London/${props.Itinerary.profilePic}.png`).default} alt={Itinerary.profilePic} /> */}
              <span>
                Posted by <strong>{Itinerary.profilePic}</strong>
              </span>
            </section>
          </div>
        );
      })}
    </Slider>
  );
};

export default Slide;
