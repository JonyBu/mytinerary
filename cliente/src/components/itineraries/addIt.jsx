import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  Col,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Footer from "../footer";
import Menu from "../menu";
import addItinerary from "../../redux/actions/addItineraryAction";

class AddIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: 0,
      quantityRating: 0,
      duration: [],
      cost: [],
      description: [],
      tag: [],
      userPic: props.loginReducer.currentUser.profilePic,
      userName: props.loginReducer.currentUser.userName,
      cityName: "",
      countryName: "",
      idCity: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCity = this.handleInputCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.splitTag();
    const newIt = this.state;
    await this.props.addItinerary(newIt);
    this.props.history.push("/addDetails");
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  splitTag = () => {
    const tags = this.state.tag;
    var array = tags.split(" ");
    this.setState({
      tag: array,
    });
  };

  handleInputCity = (event) => {
    const target = event.target;
    const value = target.value;

    const city = this.props.citiesReducer;

    let cityFind = city.find((element) => element.name === value);
    this.setState({
      cityName: cityFind.name,
      countryName: cityFind.country,
      idCity: cityFind._id,
    });
  };

  render() {
    return (
      <>
        <Menu />
        <br />
        <Jumbotron>
          <Form>
            <FormGroup row>
              <Label for="title" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="duration" sm={2}>
                Duration
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="duration in hours"
                  value={this.state.duration}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="cost" sm={2}>
                Cost
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="cost"
                  id="cost"
                  placeholder="total cost"
                  value={this.state.cost}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="general description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="tag" sm={2}>
                Tags
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="tag"
                  id="tag"
                  placeholder="eg: #design #architecture"
                  value={this.state.tag}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="city" sm={2}>
                Select city
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="city"
                  id="city"
                  value={this.state.select}
                  onChange={this.handleInputCity}
                >
                  <option value="default">choose the city</option>
                  {this.props.citiesReducer.map((city, i) => (
                    <option value={city.name} key={i}>
                      {city.name}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>

            <FormGroup check row>
              <Col sm={{ size: 12 }}>
                <Button onClick={this.handleSubmit}>Next</Button>
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
    citiesReducer: state.citiesReducer.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItinerary: (data) => dispatch(addItinerary(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIt);
