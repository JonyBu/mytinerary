import React, { useState } from 'react';
import { Collapse, CardBody, Card, InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';
import Activities from './activities';

const CollapseIt = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>View All</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <h5 className="izquierda">Activities</h5>
                        <br />
                        <Activities />
                        <br />
                        <h5 className="izquierda">Coments</h5>
                        <br />
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>></InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )

}

export default CollapseIt;