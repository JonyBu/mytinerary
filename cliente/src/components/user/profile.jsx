import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    Jumbotron, Container
} from 'reactstrap';
import Footer from '../footer';
import { connect } from 'react-redux';
import outLogin from '../../redux/actions/logoutAction';
import getUser from '../../redux/actions/getUserAction';


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: [],
            isConected: []
        }
    }

    async componentWillMount() {
        await this.props.getUser(this.state)
        this.setState({ currentUser: this.props.loginReducer.currentUser, isConected: this.props.loginReducer.isConected })
    }

    handleClick = event => {
        event.preventDefault()
        this.props.outLogin(this.state)
    }

    render() {
        console.log(this.state);
        return (
            <div >
                {/* <img src={require(this.state.profilePic)} alt="algo"/> */}
                <br />
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">WELCOME</h1>
                        <p className="lead">{this.state.currentUser.userName}  </p>
                        <p className="lead">{this.props.loginReducer.userName} {this.props.loginReducer.lastName} </p>
                        <Card>
                            {/* <CardImg width="100%" object src={require(this.state.currentUser.profilePic)} alt={this.state.currentUser.profilePic} /> */}
                            
                            <CardBody>
                                <CardText>Your Name: {this.state.currentUser.firstName} {this.state.currentUser.lastName}</CardText>
                                <CardText>Email: {this.state.currentUser.email} </CardText>
                                <CardText>Country: {this.state.currentUser.country} </CardText>

                                {/* <CardText>Your Mail: {this.props.loginReducer.email} </CardText>
                                <CardText>Country: {this.props.loginReducer.country} </CardText> */}
                            </CardBody>
                        </Card>
                        <br />
                        <CardLink onClick={this.handleClick.bind(this)} href="/">Logout</CardLink>
                        <CardLink href="/favorite">My favorite Itinerary</CardLink>
                    </Container>
                </Jumbotron>
                <Footer />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        outLogin: (data) => dispatch(outLogin(data)),
        getUser: (data) => dispatch(getUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);