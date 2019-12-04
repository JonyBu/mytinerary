import React from 'react';
import Whirligig from 'react-whirligig';
import { Button } from 'reactstrap';

const Slide = (props) => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()
    return (
        <div >
            <div className="separar">
                <Button outline color="primary" onClick={prev}>Prev</Button>
                <h5>Activities</h5>
                <Button outline color="primary" onClick={next}>Next</Button>
            </div>
            <br />
            <Whirligig visibleSlides={3} gutter="30em" ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}>

                
                    {props.detailsReducer.map((details, i) =>
                        <div className="centrar" id={i}>
                            <img className="imagenSlide" src={require(`../../../../imagenes/detalles/London/${details.activityPic}.jpg`)} alt={details.title} />
                            <br />
                            <h5 >{details.title}</h5>
                        </div>
                    )}

                {/* {props.detailsReducer ?
                    props.detailsReducer.map((details, i) =>
                        <div className="centrar" id={i}>
                            <img className="imagenSlide" src={require(`../../../../imagenes/detalles/London/${details.activityPic}.jpg`)} alt={details.title} />
                            <br />
                            <h5 >{details.title}</h5>
                        </div>
                    ) : <div></div>} */}

            </Whirligig>
        </div>
    )
}

export default Slide;