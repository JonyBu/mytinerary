import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Jumbotron, Container
} from 'reactstrap';
import Footer from '../footer';

const Profile = () => {
    
    return (
        <div >
            <br />
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">WELCOME</h1>
                    <p className="lead">Agregar nombre</p>
                    <Card>
                        <CardBody>
                            <CardTitle>WELCOME</CardTitle>
                            <CardSubtitle>agregar nombre</CardSubtitle>
                        </CardBody>
                        <CardImg width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink href="#">Logout</CardLink>
                            <CardLink href="/favorite">My Itinerary favorite</CardLink>
                        </CardBody>
                    </Card>
                </Container>
            </Jumbotron>

            <Footer />
        </div>

    );
};

export default Profile;