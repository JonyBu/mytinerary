import React from 'react';
import image from '../imagenes/homeIcon.png';
import CityList from './cityList.jsx';

const QUOTE_SERVICE_URL = 'http://localhost:8080/app/cities';

class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            isFetching: false
        }
    }
    componentDidMount() {
        this.fetchQuotesWithFetch();
    }

    render() {
        return (
            <div >
                
                <h1>Listado de ciudades</h1>.
                <CityList cities={this.state.cities} />
                <a href="./"><img className="home" src={image} alt="imagen de home" /></a>
                
            </div>
        )
    }
    fetchQuotesWithFetch = () => {
        this.setState({ ...this.state, isFetching: true })
        fetch(QUOTE_SERVICE_URL)
            .then(response => response.json())
            .then(result => this.setState({ cities: result, isFetching: false }))
            .catch(e => console.log(e));
    }
}

export default Cities;