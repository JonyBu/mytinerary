import React, { useState } from 'react';
import { Collapse, CardBody, Card, Button } from 'reactstrap';
import Slide from '../details/slide';
import CommentsForm from './commentsForm';

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
                        <Slide />
                        <br />
                        <CommentsForm />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default CollapseIt;