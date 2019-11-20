import React from 'react';
import image from '../imagenes/homeIcon.png';
import ItineraryList from './ItineraryList';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import itinerariesAction from '../redux/actions/itinerariesAction';


class Itinerary extends React.Component {
    constructor() {
        super()
        this.state = {
            itineraries: [],
            isFetching: false
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true })
        await this.props.itinerariesAction();
    }

    render() {
        return (
            <div >
                <Jumbotron>
                    Ciudad
                </Jumbotron>
                <h3 className="izquierda">Listado de itinerarios</h3>
                <br/>
                <ItineraryList itineraryReducer={this.props.itinerariesReducer} />
                <br/>
                <a href="./cities">Elige otra ciudad</a>
                <br/>
                <a href="./"><img className="home" src={image} alt="imagen de home" /></a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        itinerariesReducer: state.itinerariesReducer.itineraries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itinerariesAction: () => {
            return dispatch(itinerariesAction())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);