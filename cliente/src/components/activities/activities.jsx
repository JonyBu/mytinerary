import React from 'react';
import { connect } from 'react-redux';
import CommentList from './commentList';
import activitiesAction from '../../redux/actions/activitiesAction';

class activities extends React.Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            isFetching: false
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true})
        await this.props.activitiesAction();
    }

    render(){
        return (
            <div>
                <CommentList activitiesReducer= {this.props.activitiesReducer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        activitiesReducer: state.activitiesReducer.activities,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activitiesAction: () => {
            return dispatch(activitiesAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(activities);