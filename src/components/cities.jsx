import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import image from '../imagenes/homeIcon.png';
import amsterdam from '../imagenes/amsterdam 1.jpg';
import barcelona from '../imagenes/barcelona.jpg';
import newyork from '../imagenes/nueva_york.jpg';
import paris from '../imagenes/paris.jpg';
import Home from './home';

class Citys extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/home" component={Home} />
                    <Link to="/home"><img id="home" src={image} alt="home" /></Link>
                    <h2>Popular MYtineraries</h2>
                    <div>
                        <img src={amsterdam}alt="amsterdam"/>
                        <img src={paris} alt="paris"/>
                        <img src={newyork} alt="newyork"/>
                        <img src={barcelona} alt="barcelona"/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Citys; 