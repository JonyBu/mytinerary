import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileAction, logoutUser } from '../../redux/actions/profileAction';
import Signup from './createAccount';
import Login from './login';

class App extends Component {
    componentDidMount = () => {
        this.props.getProfileAction()
    }

    handleClick = event => {
        event.preventDefault()
        // Elimina el token de localStorage
        localStorage.removeItem("token")
        // Elimina el objeto de usuario de la tienda Redux
        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
                {this.props.currentUser.username ? <button onClick={this.handleClick}>Log Out</button> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
    getProfileAction: () => dispatch(getProfileAction()),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);