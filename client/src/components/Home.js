import React from 'react';
import  { Row, Col, Jumbotron, Button } from 'reactstrap';

function Home() {
    
    return (
        <div>
            <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Welcome to my website</h1>
                            <p>
                            <Button tag='a' href='https://cindycoding.netlify.app/resume' color='success' size='large' target='_blank'>View Resume</Button>
                            </p>
                        </Col>
                    </Row>
            </Jumbotron>
        </div>
    )
}

export default Home;


