import React from 'react';
import { CardBody, Card } from 'reactstrap';
import { Media } from 'reactstrap';
import CollapseIt from './collapse';
import Hash from './hash';

const ItineraryList = (props) => {

    return (
        props.itineraryReducer.map((itinerary, i) =>
            <div key={i}>
                <Card>
                    <CardBody >
                        <Media>
                            <Media left>
                                <Media className="imageProfile" object src={require(`../../imagenes/itinerarios/London/${itinerary.profilePic}.png`)} alt={itinerary.profilePic} />
                                <br />
                                <h6>{itinerary.profilePic}</h6>
                            </Media>
                            <Media body>
                                <Media heading>
                                    {itinerary.title}
                                </Media>
                                <br />
                            Likes: {itinerary.rating}  |  {itinerary.duration} Hours  |  ${itinerary.cost}
                                <br /><br />
                                <Hash hashtag={itinerary.hashtag} />
                                <br />
                                <br />
                            </Media>
                        </Media>
                        <CollapseIt idItinerary={itinerary._id} />
                        <br />
                    </CardBody>
                </Card>
                <br />
            </div>

        )
    )
}

export default ItineraryList;