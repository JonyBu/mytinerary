import React from 'react';
import image from '../imagenes/MYtineraryLogo.png';
import '../App.css';

class Head extends React.Component {
    render() {
        return (
            <div class="centrar">
                <img id="logo" src={image} alt="" />
            </div>
        );
    }
}

export default Head;