import React from 'react';
import {Link } from 'react-router-dom';
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
                <Link to="../cities">Elige otra ciudad</Link>
                <br/>
                <Link to="../"><img className="home" src={image} alt="imagen de home" /></Link>
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