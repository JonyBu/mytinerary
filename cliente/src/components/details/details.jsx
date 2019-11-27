import React from 'react';
import { connect } from 'react-redux';
import DetailList from './detailsList';
import RoutesActivities from './routesActivities';
import detailsAction from '../../redux/actions/detailsAction';
import View from '../details/view';

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
                {/* <View detailsReducer = {this.props.detailsReducer}/> */}
                {/* <DetailList detailsReducer= {this.props.detailsReducer}/> */}
                <RoutesActivities detailsReducer= {this.props.detailsReducer}/> 
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