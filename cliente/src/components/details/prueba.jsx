import React from 'react';

const DetailList = (props) =>

    props.detailsReducer.map((details, i) =>
        <div key={i}>
            {details.title} {details.activityPic}
        </div>
    );

export default DetailList;

// copiado de detailList