import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Jumbotron, Container, 
} from 'reactstrap';
import Footer from '../footer';
import { connect } from 'react-redux';
import outLogin from '../../redux/actions/logoutAction';
import getUser from '../../redux/actions/getUserAction';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            connected: '',
            user:[]
        }
    }

    async componentDidMount(){
        this.setState({...this.state})
        await this.props.getUser(this.state)
        this.setState({user: this.props.userReducer})
        console.log(this.props.userReducer);

        //HACER UN COMPONENTE PARA LLENAR CON LA ACTION O VER UN VIDEO PARA HACERLO SIN PROPS
    }

    handleClick = event => {
        event.preventDefault()
        this.props.outLogin(this.state)
    }

    render(){
        console.log("GET USER"+ this.state)
        
        return (
            <div >
            <br />
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">WELCOME</h1>
                    <p className="lead"> {this.state.userName} </p>
                    <Card>
                        <CardBody>
                            <CardTitle></CardTitle>
                            <CardSubtitle> </CardSubtitle>
                        </CardBody>
                        <CardImg width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink onClick={this.handleClick.bind(this)} href="/">Logout</CardLink>
                            <CardLink href="/favorite">My favorite Itinerary</CardLink>
                        </CardBody>
                    </Card>
                </Container>
            </Jumbotron>

            <Footer />
        </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state.loginReducer.currentUser);
    return {
        currentUser: state.loginReducer.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    outLogin: (data) => dispatch(outLogin(data)),
    getUser: (data) => dispatch(getUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);