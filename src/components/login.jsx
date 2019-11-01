import React from 'react';
import image from '../imagenes/homeIcon.png';

class Login extends React.Component{
    render(){
        return (
            <div >
                <a href="./"><img className="home" src={image} alt="imagen de home"/></a>
                <h1>log in</h1>
            </div>
        )
    }
}

export default Login;