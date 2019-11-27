import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import View from './view';

const RoutesActivities = (props) => {
    return (
        props.detailsReducer.map((details, i) =>
            <div key={i}>
                <Router>
                    <div className="Slide">
                        <SwipeableRoutes>
                            <Route path={`/${details.activityPic}`} component={View} />
                        </SwipeableRoutes>
                        <div>
                            <Link to={`/${details.activityPic}`}>{details.title}</Link> |
                        </div>
                    </div>
                </Router>
            </div>
        )
    )
}

export default RoutesActivities;