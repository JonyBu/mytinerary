import React from 'react';
import image from '../imagenes/homeIcon.png';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="centrar">
                <Link to="/"><img className="home" src={image} alt="imagen de home" /></Link>
            </div>
        );
    }
}

export default Footer;