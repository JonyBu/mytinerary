import React from 'react';
import { connect } from 'react-redux';
import CommentList from './comments/commentList';
import activitiesAction from '../../../redux/actions/activitiesAction';
import Details from './details/details';
import CommentsForm from './commentsForm';

class activities extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            isFetching: false
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true })
        await this.props.activitiesAction(this.props.match.params.idItinerary);
    }

    render() {
        return (
            <div>
                <Details />
                <br/>
                <div>
                    <CommentList activitiesReducer={this.props.activitiesReducer} />
                </div>
                <br/>
                <CommentsForm />
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
        activitiesAction: (data) => {
            return dispatch(activitiesAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(activities);