import React, { useState } from 'react';
import { Collapse, CardBody, Card, Button } from 'reactstrap';

import Activities from '../itineraries/activities/activities';


const CollapseIt = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View All</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <Activities idItinerary={props.idItinerary}/>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default CollapseIt;