import React from 'react';
import { connect } from 'react-redux';
import itinerariesAction from '../../redux/actions/itinerariesAction';
import ItineraryList from './ItineraryList';

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
        await this.props.itinerariesAction(this.props.match.params.idCity);
    }

    render() {
        console.log(this.props);
        
        return (
            <div >
                <br />
                <h3 className="izquierda">Listado de itinerarios</h3>
                <br />
                <ItineraryList itineraryReducer={this.props.itinerariesReducer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itinerariesReducer: state.itinerariesReducer.itineraries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itinerariesAction: (data) => {
            return dispatch(itinerariesAction(data))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);