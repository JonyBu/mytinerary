import React from 'react';
import image from '../imagenes/homeIcon.png'

class Users extends React.Component {
    render() {
        return (
            <div >
                
                <h1>Create Account</h1>
                <a href="./"><img className="home" src={image} alt="imagen de home"/></a>
                
            </div>
        )
    }
}

export default Users