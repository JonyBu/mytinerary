import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  Jumbotron,
  Container,
} from "reactstrap";
import Footer from "../footer";
import { connect } from "react-redux";
import outLogin from "../../redux/actions/logoutAction";
import getUser from "../../redux/actions/getUserAction";
import img from "../../imagenes/user.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      isConected: [],
    };
    // this.handleInputImage = this.handleInputImage.bind(this)
  }

  // handleInputImage = (props) => {
  //     const localImageUrl =  `../../imagenes/${props.img}`
  //     document.querySelector('img').src = localImageUrl
  //   }

  async componentDidMount() {
    // async componentWillMount() {
    // await this.props.getUser(this.props.loginReducer)

    await this.props.getUser();
    this.setState({
      currentUser: this.props.loginReducer.currentUser,
      isConected: this.props.loginReducer.isConected,
    });
    // this.handleInputImage(this.state.currentUser.profilePic)
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.outLogin(this.state);
  };

  render() {
    if (this.props.loginReducer.isConected === true) {
    }
    return (
      <div>
        <img src={img} alt={img} />
        <br />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">WELCOME</h1>
            <p className="lead">{this.state.currentUser.profilePic} </p>
            <p className="lead">
              {this.props.loginReducer.userName}{" "}
              {this.props.loginReducer.lastName}{" "}
            </p>
            <Card>
              {/* <CardImg width="100%" object src={`${this.state.currentUser.profilePic}.png`} alt={this.state.currentUser.profilePic} /> */}

              <CardBody>
                <CardText>
                  Your Name: {this.state.currentUser.firstName}{" "}
                  {this.state.currentUser.lastName}
                </CardText>
                <CardText>Email: {this.state.currentUser.email} </CardText>
                <CardText>Country: {this.state.currentUser.country} </CardText>

                {/* <CardText>Your Mail: {this.props.loginReducer.email} </CardText>
                                <CardText>Country: {this.props.loginReducer.country} </CardText> */}
              </CardBody>
            </Card>
            <br />
            <CardLink onClick={this.handleClick.bind(this)} href="/">
              Logout
            </CardLink>
            <CardLink href="/favorite">My favorite Itinerary</CardLink>
          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.loginReducer)
  return {
    loginReducer: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    outLogin: (data) => dispatch(outLogin(data)),
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
