import React from 'react';
import Footer from '../footer';
import { connect } from 'react-redux';
import outLogin from '../../redux/actions/logoutAction';
import getUser from '../../redux/actions/getUserAction';

class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: [],
            isConected: []
        }
    }

    async componentWillMount() {
        await this.props.getUser(this.state)
        this.setState({ currentUser: this.props.loginReducer.currentUser, isConected: this.props.loginReducer.isConected })
    }
    render(){
        console.log(this.state);
        
        return (
            <div >
                <h1>Itinerarios Favoritos</h1>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        outLogin: (data) => dispatch(outLogin(data)),
        getUser: (data) => dispatch(getUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Favorite);