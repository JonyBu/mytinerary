import React from 'react';
import image from '../imagenes/homeIcon.png';

class Home extends React.Component {
    render() {
        return (
            <div class="centrar">
                <img id="home" src={image} />
            </div>
        );
    }
}

export default Home;