import React from 'react';
<<<<<<< HEAD:cliente/src/components/itineraries/Itineraries.jsx
=======
import {Link } from 'react-router-dom';
import image from '../imagenes/homeIcon.png';
import ItineraryList from './ItineraryList';
import { Jumbotron } from 'reactstrap';
>>>>>>> 69dadbd40600b6264a060c302273a141126a6f28:cliente/src/components/Itineraries.jsx
import { connect } from 'react-redux';
import itinerariesAction from '../../redux/actions/itinerariesAction';
import ItineraryList from './ItineraryList';
import HeadImage from '../../imagenes/itinerarios/London/londres.jpg';




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
                <div>
                    <img className="imagenHead" src={HeadImage} alt="London" />
                </div>
                <br />
                <h3 className="izquierda">Listado de itinerarios</h3>
                <br />
                <ItineraryList itineraryReducer={this.props.itinerariesReducer} />
<<<<<<< HEAD:cliente/src/components/itineraries/Itineraries.jsx
=======
                <br/>
                <Link to="../cities">Elige otra ciudad</Link>
                <br/>
                <Link to="../"><img className="home" src={image} alt="imagen de home" /></Link>
>>>>>>> 69dadbd40600b6264a060c302273a141126a6f28:cliente/src/components/Itineraries.jsx
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