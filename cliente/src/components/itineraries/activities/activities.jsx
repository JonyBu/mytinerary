import React from 'react';
import { connect } from 'react-redux';
import CommentList from './comments/commentList';
import activitiesAction from '../../../redux/actions/activitiesAction';
import Details from './details/details';
import CommentsForm from './commentsForm';

class activities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            isFetching: false,
            activities: []
        }
    }
    async componentDidMount() {
        this.setState({ ...this.state, isFetching: true })
        await this.props.activitiesAction(this.props.idItinerary);
        this.setState({ activities: this.props.activitiesReducer })
    }



    render() {
        console.log(this.state);
        
        return (
            <div>
                {/* {this.state.activities.map((itineraries) => <Details idItinerary={itineraries._id} />) } */}
                <Details idItinerary={this.props.idItinerary} />                
                <br />
                <div>
                     <CommentList activitiesReducer={this.state.activities} />
                </div>
                <br />
                <CommentsForm idItinerary={this.props.idItinerary} />
            </div>

            // <div>
            //     {this.state.activities
            //         ? this.state.activities.map((activities) => <Details idActivity={activities._id} />)
            //         : <div></div>
            //     }
            //     <br />
            //     <div>
            //         {this.state.activities
            //             ? <CommentList activitiesReducer={this.state.activities} />
            //             : <div></div>
            //         }
            //     </div>
            //     <br />
            //     <CommentsForm />
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
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