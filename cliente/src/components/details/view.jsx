import React from 'react'

const View = (props) => {
    return (
        props.detailsReducer.map((details, i) =>
            <div key={i}>
                <div style={{ height: 300 }}>
                    <img src={require(`../../imagenes/detalles/London/${details.activityPic}.jpg`)} alt={details.activityPic}/>
                    {details.title}
                </div>
            </div>
        )
    )
}

export default View;