import React from 'react';
import { connect } from 'react-redux';
import Slide from './slide';
import detailsAction from '../../../../redux/actions/detailsAction';

class details extends React.Component {
    
    constructor(){
        super()
        this.state = {
            details: [],
            isFetching: false
        }
    }

    async componentDidMount() {
        this.setState({...this.state, isFetching: true})
        await this.props.detailsAction();
    }

    render(){
        return (
            <div>
                 <Slide detailsReducer= {this.props.detailsReducer}/>  
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        detailsReducer: state.detailsReducer.details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        detailsAction: () => {
            return dispatch(detailsAction())
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(details)