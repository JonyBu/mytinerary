import React, { useState } from 'react';
import { Collapse, CardBody, Card, Button } from 'reactstrap';

import Activity from '../itineraries/activities/activities';


const CollapseIt = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View All</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <Activity />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default CollapseIt;