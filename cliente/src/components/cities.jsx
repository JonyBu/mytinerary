import React from 'react';
import image from '../imagenes/homeIcon.png';
import CityList from './cityList.jsx';
import FilterForm from './filterCities.jsx';

import { connect } from 'react-redux';
import citiesAction from '../redux/actions/citiesAction';


class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            filteredCities: [],
            isFetching: false
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true })
        await this.props.citiesAction();
        this.setState({ filteredCities: this.props.citiesReducer })
    }

    filterCities = (cityFilter) => {
        let filteredCities = this.props.citiesReducer;
        filteredCities = filteredCities.filter((cities) => {
            let cityName = cities.name.toLowerCase() + cities.country.toLowerCase()
            return cityName.indexOf(
                cityFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredCities
        })
    }

    render() {
        return (
            <div >
                <h1>Listado de ciudades</h1>
                <FilterForm match={this.props.match} onChange={this.filterCities} />
                <CityList citiesReducer={this.state.filteredCities} />
                <a href="./"><img className="home" src={image} alt="imagen de home" /></a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        citiesReducer: state.citiesReducer.cities,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        citiesAction: () => {
            return dispatch(citiesAction())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);