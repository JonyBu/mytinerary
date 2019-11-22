import React from 'react';
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