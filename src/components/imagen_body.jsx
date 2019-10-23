import React from 'react';
import image from '../imagenes/circled-right-2.png';
import '../App.css';

class BodyImage extends React.Component {
    render() {
        return (
            <div class="centrar">
                <h2>Start browsing</h2>
                <img id="flecha" src={image} alt="" />
            </div>
        );
    }
}

export default BodyImage;