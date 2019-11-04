import React from 'react';
import image from '../imagenes/homeIcon.png';

class Footer extends React.Component {
    render() {
        return (
            <div class="centrar">
                <img id="home" src={image} alt="home"/>
            </div>
        );
    }
}

export default Footer;