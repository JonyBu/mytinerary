import React from 'react';

const DetailList = (props) => {
    return (
        props.detailsReducer.map((details, i) =>
            <div key={i}>
                {details.title} {details.activityPic}
            </div>
        )
    )
}

export default DetailList;