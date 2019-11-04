import React from 'react';
import image from '../imagenes/homeIcon.png';

class Login extends React.Component {
    render() {
        return (
            <div >
                <h1>log in</h1>

                <a href="./"><img className="home" src={image} alt="imagen de home" /></a>
            </div>
        )
    }
}

export default Login;