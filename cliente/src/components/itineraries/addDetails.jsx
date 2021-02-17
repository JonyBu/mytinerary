import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Jumbotron,
} from "reactstrap";

import addDetails from "../../redux/actions/addDetailAction";
import updateUserAction from "../../redux/actions/user/updateUserAction";
import updateCitiesAction from "../../redux/actions/updateCitiesAction";

import Menu from "../menu";
import Footer from "../footer";

let imagen = require(`../../imagenes/detalles/add-image.png`).default;

class AddDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      update: false,
      contador: 1,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (!this.state.update) {
      const it = this.props.loginReducer.currentUser.myTineraries;
      it.push(this.props.newItinerary);
      const newData = {
        file: false,
        data: {
          myTineraries: [it],
          id: this.props.loginReducer.currentUser._id,
        },
      };
      await this.props.updateUserAction(newData);
      const city = {
        id: this.props.newItinerary.idCity,
        data: {
          name: this.props.newItinerary.cityName,
          country: this.props.newItinerary.countryName,
          itineraries: true,
        },
      };
      await this.props.updateCitiesAction(city);
      this.setState({
        update: true,
      });
    }
  }

  toggle = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleInputImage = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const imagen2 = URL.createObjectURL(files[0]);
    document.getElementById("detailsPic").src = imagen2;
    this.setState({
      activityPic: files[0],
      idItinerary: this.props.newItinerary._id,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addDetails(this.state);
    var contador2 = this.state.contador;
    contador2++;
    this.setState({
      title: "",
      details: "",
      activityPic: "",
      idItinerary: this.props.newItinerary._id,
      contador: contador2
    });
    document.getElementById("detailsPic").src = imagen;
  };

  render() {
    return (
      <>
        <Menu />
        <br />
        <Jumbotron>
          <p>
            Add details of itineraries in {this.props.newItinerary.cityName} -{" "}
            {this.props.newItinerary.countryName}{" "}
          </p>
          <p>Detail {this.state.contador} </p>
          <div
            className="slider-content"
            style={{ background: `url(${imagen}) no-repeat center center` }}
          >
            <img src={imagen} id="detailsPic" alt="detailsPic" />
            <section>
              <span>slider</span>
            </section>
          </div>

          <Form className="mt-2">
            <FormGroup row>
              <Label for="title" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="image detail title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="details" sm={2}>
                Details
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="details"
                  id="details"
                  placeholder="image detail description"
                  value={this.state.details}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="activityPic" sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="activityPic"
                  id="activityPic"
                  onChange={this.handleInputImage}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={6}>
                <Button onClick={this.handleSubmit}>Add other</Button>
              </Col>

              <Col sm={6}>
                <Button>
                  <Link  to={`/itineraries/${this.props.newItinerary.idCity}`} >
                  Finish
                  </Link>  
                  </Button>
              </Col>
            </FormGroup>
          </Form>
        </Jumbotron>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
    newItinerary: state.itinerariesReducer.newItinerary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDetails: (data) => dispatch(addDetails(data)),
    updateUserAction: (data) => dispatch(updateUserAction(data)),
    updateCitiesAction: (data) => dispatch(updateCitiesAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);
