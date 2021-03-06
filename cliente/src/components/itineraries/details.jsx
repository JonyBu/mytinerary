import React from "react";
import { connect } from "react-redux";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import detailsAction from "../../redux/actions/detailsAction";

class details extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
    };
  }

  async componentDidMount() {
    await this.props.detailsAction(this.props.Itinerary._id);
    this.setState({ details: this.props.detailsReducer });
  }

  render() {
    return (
      <Slider className="slider-wrapper">
        {this.state.details.map((item, index) => {
          let imagen = require(`../../imagenes/detalles/${item.activityPic}`)
            .default;
          return (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url(${imagen}) no-repeat center center` }}
            >
              <section>
                <span>
                  {item.title}
                  <strong>{item.details}</strong>
                </span>
              </section>
            </div>
          );
        })}
      </Slider>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    detailsReducer: state.detailsReducer.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsAction: (data) => {
      return dispatch(detailsAction(data));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(details);
