import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Media } from 'reactstrap';
import imagen from '../imagenes/user/GaudiLover.png'

const ItineraryList = (props) =>
    props.itineraryReducer.map((itinerary, i) =>

        <div>
            <Card>
                <CardBody key={i}>
                    <Media>
                        <Media left href="#">
                            <Media object src={require(`../imagenes/user/${itinerary.profilePic}`)} alt={itinerary.profilePic} />
                        </Media>
                        <Media body>
                            <Media heading>
                                {itinerary.title}
                            </Media>
                            <br />
                            Likes: {itinerary.rating}  |  {itinerary.duration} Hours  |  ${itinerary.cost}
                            <br /><br />
                            {itinerary.hashtag}
                            <Button>view all</Button>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
        </div>
    )


export default ItineraryList;