import React from 'react'
import {Container, Row ,Col} from "react-bootstrap"
import Storiescard from '../components/Storiescard'
import eventimg1 from '../components/images/eventimg1.png' 

const Stories = () => {
    return (
        <section className="storiescontainer">
            
            <div className="event1">
                <span className="event1text">Stories</span>
            </div>
            
            
            <Container>
                <Row>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                    <Col>
                    <Storiescard
                            img={eventimg1}
                            text="lorem ipsum"
                        />
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default Stories

