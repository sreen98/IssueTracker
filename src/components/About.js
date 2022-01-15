import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const About = () => {
    return (
        <Container style={{marginTop:"1rem"}}>
            <Row>
                <Col>
                    <h1 className="mainheading">About</h1>
                    <p>
                        This Application is used to track the status of the issues raised
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export default withRouter(About);
