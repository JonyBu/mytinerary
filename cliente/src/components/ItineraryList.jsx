import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Media } from 'reactstrap';

const ItineraryList = (props) =>
    props.itineraryReducer.map((itinerary, i) =>

        <div>
            <Card>
                <CardBody key={i}>
                    <Media>
                        <Media left href="#">
                            <Media className="imageProfile" object src={require(`../imagenes/user/${itinerary.profilePic}`)} alt={itinerary.profilePic} />
                        </Media>
                        <Media body>
                            <Media heading>
                                {itinerary.title}
                            </Media>
                            <br />
                            Likes: {itinerary.rating}  |  {itinerary.duration} Hours  |  ${itinerary.cost}
                            <br /><br />
                            {itinerary.hashtag}
                            <br />
                            <br />
                            <Button>view all</Button>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
        </div>
    )


export default ItineraryList;