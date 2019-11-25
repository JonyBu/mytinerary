import React from 'react';
import View from './view';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

const RoutesActivities = (props) => {
    return (
        props.detailsReducer.map((details, i) =>
            <div key={i}>
                <Router>
                    <div className="Slide">
                        <SwipeableRoutes>
                            <Route path={details.activityPic} component={View}/>
                        </SwipeableRoutes>
                        <div>
                            <Link to={details.activityPic}>{details.title}</Link> |
                        </div>
                    </div>
                </Router>
            </div>
        )
    )
}

export default RoutesActivities;