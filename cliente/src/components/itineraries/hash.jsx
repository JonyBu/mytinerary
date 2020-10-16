import React from 'react';

const Hash = (props) => {
    return (
        props.hashtag.map((has, i) =>
            <div key={i}>
                <span className="badge badge-pill badge-info"> {
                    has
                } </span>
            </div>
        )
    )
}

export default Hash;