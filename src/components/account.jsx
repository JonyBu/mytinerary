import React from 'react';
import '../App.css';

class Account extends React.Component{
    render(){
        return(
            <div class="centrar">
                <p>want to build your own MYitinerary?</p>
                <div class="link">
                    <a href="#">Log in</a>
                    <a href="#">Create Account</a>
                </div>
            </div>
        );
    }
}

export default Account;