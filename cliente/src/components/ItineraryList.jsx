import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { Media } from 'reactstrap';
import Activities from './activities';

const ItineraryList = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        props.itineraryReducer.map((itinerary, i) =>
            <div>
                <Card>
                    <CardBody key={i}>
                        <Media>
                            <Media left>
                                <Media className="imageProfile" object src={require(`../imagenes/user/${itinerary.profilePic}.png`)} alt={itinerary.profilePic} />
                                <br/>
                                <h6>{itinerary.profilePic}</h6>
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
                                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View All</Button>
                                
                            </Media>
                        </Media>
                        <Collapse isOpen={isOpen}>
                                    <Card>
                                        <CardBody>
                                            <h5 className="izquierda">Activities</h5>
                                            <br />
                                            {Activities}
                                            <h5 className="izquierda">Coments</h5>
                                            <InputGroup>
                                                <Input />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText>></InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                    </CardBody>
                </Card>
            </div>
        )
    )
}



export default ItineraryList;